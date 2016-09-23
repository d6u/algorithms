### 209 Minimum Size Subarray Sum - follow up

follow up: contains negative

用double for loop， O(n**2) time和O(1)space去做，写完之后小哥说可不可以用linear space，答做一个类似dp 的array，sum(i+1) = sum(i) + arr[i+1], sum(i, j) = sum(j) - sum(i+1)。

**LC的sliding window和range sum query的结合

### Min Queue

跟Min Stack类似， 实现一个Queue， 然后 O(1) 复杂度获得这个Queue里最小的元素
