### 91 decode ways - follow ups

Follow up 1: optimize space complexity to O(1)

Follow up 2: 给定一个定长的序列（可以非常长），请给出 solution 输出所有可能的字母组合

### 209 Minimum Size Subarray Sum - follow up

follow up: contains negative

用double for loop， O(n**2) time和O(1)space去做，写完之后小哥说可不可以用linear space，答做一个类似dp 的array，sum(i+1) = sum(i) + arr[i+1], sum(i, j) = sum(j) - sum(i+1)。

**LC的sliding window和range sum query的结合

### Min Queue

跟Min Stack类似， 实现一个Queue， 然后 O(1) 复杂度获得这个Queue里最小的元素
