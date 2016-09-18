# System Design

## Sharding

Advantages:

- High availability
- Faster queries
- More write bandwidth
- You can do more work in parallel

Vs. Traditional Architectures:

- Data are denormalized
- Data are parallelized across many physical instances
- Data are kept small (more chance of staying in cache)
- Data are more highly available
- It doesn't use replication

Problems:

- Rebalancing data
- Joining data from multiple shards
- How do you partition your data in shards?
- Less leverage (less help from community)
- Implementing shards is not well supported


Facebook most asked design questions (basically most used products/features in FB):
New feed:
https://code.facebook.com/posts/781984911887151/serving-facebook-multifeed-efficiency-performance-gains-through-redesign/
Time lines:
https://www.facebook.com/note.php?note_id=10150468255628920
http://highscalability.com/blog/2012/1/23/facebook-timeline-brought-to-you-by-the-power-of-denormaliza.html

FB SYSTEM DESIGN:

1. design  pocketmon ,  google search suggestion.

2. 设计一个系统，大概有1b的active user，大家都会post，每个post，都有名字和时间戳。然后还有一个search的功能，输入是一个或多个keyword（words之间是OR关系），要求返回相关的post。这个问题牵扯到如何存，如果做search word。大概的结构是什么样子的，还有要估算出每个function都需要多少机器呢。估算做的不完整，我只算出来了存post需要多少个机器，然后没有时间了。三哥说架构没有问题，good direction，算出来多少机器那一步不错。

3. Design URL Shortening service/TinyURL
two quick questions:. 涓€浜�-涓夊垎-鍦帮紝鐙鍙戝竷
(1) first round, do you need convert to single linked list or double linked list, would you please provide the function signature?. from: 1point3acres.com/bbs
(3) third round about the design tiny url service, how to answer it?
--what kind of assumption.clarification needed to be made? read heavy write heavy, and what's the qps?
--what kind of archtecture to propose? load balancer, app server, memcached, mysql? 鏉ユ簮涓€浜�.涓夊垎鍦拌鍧�.
--do you need provide estimation on how many app servers, or cache servers or dbs?
--do you need provide algorithm on how to generate short url based on long url?

1. Singly, ListNode convertBT(TreeNode node);

我觉得你问得几个问题都非常好。我跟面试官的交流过程是这样的
1. 首先我跟面试官确认的是requirement,至于web service来讲就是API:. 涓€浜�-涓夊垎-鍦帮紝鐙鍙戝竷
(a) Url shortenUrl(Url longUrl), which is write request.1point3acres缃�
(b) Url getLongUrl(Url shortUrl), which is read request

2. 接着我就跟面试官问capacity流量问题，也就是类似于你问得qps，我就问是有多大的traffic，面试官说要很大的流量，比如能够支持twitter上面tiny url的流量。
从系统设计的角度要求就是要production ready：it needs to be scalable , high available, and high performance.

3. 接下来我就分析你所提到的read/write heavy问题，通过分析以及我们的经验可以推理，tiny url service的read/write ratio肯定很高，也就是它是一个read heavy system。从用户的角度来分析需求，对于read request，你肯定希望反应越快越好，而且以下场景是设计者需要考虑到的，某些hot url的qps肯定非常高,你一定希望read reqeust to be very scalalbe for large qps. 对于write request来讲，首先我们可以想象的是它的qps不会高到哪里去，用户在产生tiny url时多等一秒半秒的并不会太影响用户体验，但是对于read request就不一样了，你肯定希望它反应越快越好，但是write request对于consistency的要求却是非常高的，也就是你不希望不同的long url generate the same short url，race condition or short url collisions should be avoided。从系统设计的角度就可以得到这样的具体需求
（a）read request: highly scalable, high performance, high availability.. From 1point 3acres bbs
  (b)  write request: consistency

经过以上的交流基本上这个系统的具体需求就出来了，然后就是着手design，如何从架构的角度来满足以上的需求。你说提到的架构基本跟我一样，但是后台database,我建议用key-value nosql database， key is tiny url, value is long url.原因很简单，SQL database is not designed for high scalable, high available purpose.而且它的强项ACID, Transactional,以及处理join relational table，除了consistency/transactional，我们是用不上的，反而带来performance等问题。key-value store is a perfect match for us.
所以我的系统架构基本是这样子的： load balancer -> web server -> distributed cache -> key-value store.

现在我们来考虑以上架构是否能够满足提到的需求。
(1) read request
Scalability: 由于我们的service是stateless的，web server之间share nothing，所以通过load balancer，web server这一块是非常容易horizontal scalable的，然后继续往后看，由于cache的帮忙，很大程度上会解决高QPS的问题，但是我们仍然希望他能够尽量大的take read request，并且可以解决hot spot 的问题，如果所有的请求都由一个data store 来处理，这个明显不scalable.这个时候能我们其实就可以考虑data paritition了，也就是用多个data store 实现负载均衡。很容易想到consistent hashing，我们可以基于short url再说一次hashing， 将read request distribute 到data store on the hashing ring.这样子数据库也解决了scalability的问题了。

Availability: 这个的重点仍然实在数据库上，web server 的可用性比较简单，down掉一两台机子没啥事儿，考虑到area data center outage，也就是多在几个数据中心部署就可以了。data store的高可用性就是replication，有两种方式： master-slave和 peer to peer，我们的应用场景master slave特别合适，为什么，因为前面说了，这个系统是read heavy, master 和slave both can take read request，but only master can take write request, 而且对于写操作，master 必须保证所有的slave都完成了同样的写操作才算是一次成功的write request.这个就可以避免刚产生的tiny url，不会出现read reqeust 返回not found. p2p也可以实现同样的功能，但是复杂度大一些，这里没有这个必要。

Performance: 这个其实经过以上的设计问题就不大了，得利于cache的帮忙，这个应该问题不大。至于move data closer to the user这种方案好像队tiny url这种场景用处不大，因为毕竟数据量小，如果是video/image这时候就可以考虑cdn这类的了。
-google 1point3acres
（2）Write reqeust
前面提到了consistency，也就是说我们怎么保证写操作的atomicity。这里有两种方式
（a）pessimistic locking: 就是所有的写操作都要先acquire a lock, and then perform write, at last release the lock，可以看到每一次的写操作都要先拿到所，所有的操作都serialized，明显性能是不太好的。 . Waral 鍗氬鏈夋洿澶氭枃绔�,
  (b) optimistic locking：这种方式是数据库里的每一条记录都有一个etag,你可以想象成timestamp，在update request需要attach一个etag,系统会检查这个etag跟现在的是否一样，一样的话就会perform update，否则就会失败，你重新读数据然后再更新。基本原理就是atomic compare and set，write request的etag你可以就是认为是空。这种方式再有高并发的update操作时性能比较差。. visit 1point3acres.com for more.

比较以上两种方式，我倾向与第二种，因为前面提到，写操作本设就不是heavy的，另一个主要原因是long url hash to tiny url的算法应该会保证产生collision的概率非常低，但是我们还不得不处理collision的情况，所以第二种方式完全perfect.

经过以上几步基本上这个系统就可以满足需求了。由于一开始的时候我还提到过analytcs的问题，所以follow up还有问我如何做analytics,这基本就是如何做data driven web service的问题了，是big data的领域，让我实现 top n hot url.

4. Design autocomplete in a search engine

5. 聊了聊TAO和news feed，然后在news feed的基础上加些其它feature，rank news feed
    Design news feed API。面试的人按照pull/push model准备，还准备了pub/sub model，就是给每一个friend都建一个queue，推送一份news。但是，面试官不考，也不让说关于aggregator tier或者database tier的东西，主要focus API怎么写，input/output，feed里图片怎么存，想mention friends怎么存，做multi device sync。另一个人面的类似设计题： 设计News feed system， backend的设计或者api设计两者选一。选了backend，虽然能准备的都准备了，但总感觉答的有点乱？大致讲了push/pull model, data怎么存，算算data量，怎么shard, 会问得很细，比如consistent hashing具体算法是怎么实现的，这个没有答上来。

6. Design FB messenger

7. 一道多个pc之间发送和请求数据的设计题

8. Design a Web crawler with fixed set of resources.

9. 设计一个大型在线多人视频系统，支持FB的scale

10. 设计一个google maps系统，从A点到B点的算法已经有了。整个地图大概有好几亿条线段组成，这个系统的市场占有大概30%。要求在小于1秒的时间里算出结果，估算需要多少台机器？要怎么样保存地图，怎么cache？
     设计google的mapreduce，file system，big table

11. 设计一个系统。输入为FB用户的status流, 每个status的组成为多个tags, 用户可通
过　tag1 and tag2 or tag3之类的查询语句, 查出满足这些条件的status list.

12. 最后一轮的follow up是如何利用trie做google 的type ahead feature。我的做法是每个trie node加一个weight,和维护一个top n words priority queue for his subtree

13. Design a real-time type-ahead search-phrase predictor which presents the top 10 ranked search strings that begin with a given prefix.

14. Design timeline 的 group权限，比如说user发一条status可以选择对某个group的好友可见。会讨论到fb用户规模的估算，服务器估算，social graph的存储。

15. Design偏向设计存储结构

16. 设计key-value store，直接列了一大堆从client到server的要求，基本处处陷阱

17. 搜索栏的自动完成功能

18. 给你一个点， 然后又几个million的POI，找出最近的20个。。。说了Zdistance， two dimension变成一个dimension，面试官说没听说过Zdistance，不行

19. Find close coordinates

20. Deadlock设计

21. 设计iphone Find Friends的后端。 Geohashing+DHT解决

22. 设计题问的很细，比如DHT如何实现，单机的hash table如何实现能节省内存，如何做concurrency control，如何实现mutex之类的

23. 每个record有个很大field，比如age，sex，hobby等。给一个field的组合，比如年龄小于25爱好体育，query满足这些组合条件的用户个数

24. 设计一个fb搜索引擎，这个引擎能搜索出包含关键字的fb动态， 没有讨论太多前端， 主要在讨论架构和存储。给出了倒排索引来存储index，以及讨论了下如何存储fb的动态（key-value存储）如何handle hot keyword。

25. Design Instagram

26. 有个function是list<id> getNearest(int x, int y){}, 假设从mobile上在地图上点一下，然后返回该点附近的所有建筑location。怎么设计data structure 以及data scheme

27. 设计手机上读取photo feeds 的 app
     功能： 读取好友的最近图片
       阅览好友的相册
     要求： 满足功能的同时减少对手机的能耗

28. 有200M个用户，现在让你进行分组， 将他们分成大概20个组， 每个组里大概有10M的用户， 尽量让用户interaction多的在一起

29. 设计一个fb新功能：在一个post下面， 如果有了新的comment，可以自动显示， 不需要刷新后再显示。

30. Design fb chat

31. 写一个sequential 多线程pool。实现 f(Runable r) 要求caller不可以block，但是在pool里面要一个跟着一个的运行

32. 如果系统出问题了，有个size很大的log，如何从里面找出相关的信息，面试的人说直接search关键字，面试官不满意

33. 设计一个SparseVector（就是一个超长的vector，大部分elements都是0）的class，实现dot product操作。follow up 1：如果一个vector很长（millions of non-zeros），另一个vector很短 （hundreds of non-zeros）如何优化。
            Follow up 2：如何利用index之间的关系 （比如设计class的时候规定按照递增的原则存 non-zero elements 的 index）进一步优化。

34. 设计一个 k recent contact 的service，就是当用户把鼠标点到chat对话框的时候，自动弹出k个最近的联系人。follow up：如果要弹出k个最熟悉的人怎么设计，以及资源估计（需要多少台机器来做数据存储，多少个处理request等等）




这里说的System Design和OO Design不同 System Design在FLAG以及很多大公司中主要
是design scalable distributed systems 这里只讨论如何准备这种题目

https://github.com/checkcheckzz/system-design-interview

https://github.com/shashank88/system_design
这个可以作为一个大纲，里面提到的david malans的lecture必须要看

3. http://blog.gainlo.co/index.php/ ... nterview-questions/
这个网站里面每个例子都是面试题
4. highscalability.com里面的一些文章，根据你要面什么公司来看，下面这篇不错
http://highscalability.com/blog/ ... tions-bottlene.html
5. 推荐几个比较有用的文章
（1）instgram如何Shard by ID
http://instagram-engineering.tum ... ng-ids-at-instagram. 1point3acres.com/bbs
http://instagram-engineering.tum ... ndreds-of-instances
（2）里面的例子很好
http://www.aosabook.org/en/distsys.html
（3）Cracking the system design interview. 鍥磋鎴戜滑@1point 3 acres
http://www.puncsky.com/blog/2016 ... m-design-interview/
（4）海量数据处理july贴：http://blog.csdn.net/v_july_v/article/details/7382693
（5）https://docs.google.com/document ... P0nrcy4eKiuA8Q/edit
这里有个人总结了一些东西，可以稍微看一看
（6）https://discuss.leetcode.com/top ... n-phone-browsing/15. 涓€浜�-涓夊垎-鍦帮紝鐙鍙戝竷
Leetcode站长(?)关于如何design chat application的一些思路，可以和这个结合起来看. From 1point 3acres bbs
http://blog.gainlo.co/index.php/ ... book-chat-function/
（7）Scalable system design pattern
http://horicky.blogspot.com/2010 ... esign-patterns.html
（8）https://www.adayinthelifeof.nl/2011/02/06/memcache-internals/
memcache如何design，这个很有用。。我亚麻面试的时候就问到了. Waral 鍗氬鏈夋洿澶氭枃绔�,
. 1point3acres.com/bbs







== 进阶 ==

4. http://highscalability.com/blog/2009/8/6/an-unorthodox-approach-to-database-design-the-coming-of-the.html
Database Sharding是一个很重要的概念 建议看一看

5. http://highscalability.com/all-time-favorites/
这个里面会讲到很多非常流行的网站架构是如何实现的 比如Twitter, Youtube,
Pinterest, Google等等 我的建议是看5-6个 然后你应该已经建立起了一些基本的意识
还有知道了某些技术和产品的作用和mapping 比如说到cache你会想到memcached和
Redis 说到
load balancer你会想到 Amazon ELB, F5一类的

6. http://www.infoq.com/
5里面很多的文章都会有链接 其中有很多会指向这个网站 这里面有很多的tech talk
很不错 可以看看

7. https://www.facebook.com/Engineering/notes
Facebook非常好的技术日志 会讲很多facebook的feature怎么实现的 比如facebook
message:https://www.facebook.com/notes/facebook-engineering/the-underlying-
technology-of-messages/454991608919 建议看看 尤其是准备面facebook的同学
这有一个facebook talk讲storage的https://www.youtube.com/watch?v=5RfFhMwRAic


8. 一些国内网站上的资料
http://blog.csdn.net/sigh1988/article/details/9790337
http://blog.csdn.net/v_july_v/article/details/6279498

9. 最后一些概念很有用 都是我再看这些资料的时候发现的 如果你没有遇到或者查过
建议查查
Distributed Hash Table
Eventual Consistency vs Strong Consistency
Read Heavy vs Write Heavy
Consistent Hashing
Sticky Sessions
Structured Data(uses DynamoDB) vs Unstructured Data(uses S3)http://smartdatacollective.com/michelenemschoff/206391/quick-guide-structured-and-unstructured-data http://stackoverflow.com/questions/18678315/amazon-s3-or-dynamodb

10 给有兴趣深入研究的人看的
Mining Massive Datasets --讲很多big data和data mining的东西
Big Data: Principles and best practices of scalable realtime data systems(http://www.amazon.com/gp/product/1617290343) --
twitter的前员工讲述如何处理实时数据 目前市面上讲解big data最好的一本书

== 小结＝＝
看多了以后 你的最终目标应该是心里有了一个大框架 一个基本的distributed system
是怎么搭起来的 然后心里有很多if condition 如果要是满足这个条件 我应该用什么
技术 比如如果read heavy那么用cache会提升performance之类的 同时知道应该避免什
么东西 比如避免single point of failure 再比如时间和空间的tradeoff在read
heavy的时候应该倾向于时间 Write heavy的时候倾向于空间等等

你总结出来的和我总结出来的大框架和if conditions肯定不完全一样 但因为system
design本来就是一个open ended question 所以不用害怕 能够自圆其说 就不会有问题

最后 本文纯属抛砖引玉 如果有大牛发现有错误或者有补充 欢迎留言 大家一起讨论

