function mergeSort(nums, start, end) {
  if (start === end) {
    return;
  }

  const mid = Math.floor((start + end) / 2);

  mergeSort(nums, start, mid);
  mergeSort(nums, mid + 1, end);

  let k = 0;
  let i = start;
  let j = mid + 1;
  const cache = Array(end - start + 1);

  while (i <= mid && j <= end) {
    if (nums[i] < nums[j]) {
      cache[k] = nums[i];
      i++;
    } else {
      cache[k] = nums[j];
      j++;
    }
    k++;
  }

  while (i <= mid) {
    cache[k] = nums[i];
    k++;
    i++;
  }

  for (let x = 0; x < k; x++) {
    nums[start + x] = cache[x];
  }
}

const input = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
mergeSort(input, 0, input.length - 1);
console.log(input);
