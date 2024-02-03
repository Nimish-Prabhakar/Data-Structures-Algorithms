console.log(leastBoundIterative([1, 2, 3, 4, 5, 6, 8, 8, 9, 11, 12], 7));

console.log(leastBoundRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12], 11));

// Least Bound is the samllest index greater or equal to target
// smallest arr[i] >= target

// Iterative Approach
function leastBoundIterative(arr, target) {
  let length = arr.length;

  let left = 0;
  let right = length - 1;
  let answer = length;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] >= target) {
      answer = middle;
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return answer;
}

// Recursive Approach
function leastBoundRecursive(
  arr,
  target,
  left = 0,
  right = arr.length - 1,
  answer = arr.length
) {
  if (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] >= target) {
      answer = middle;
      return leastBoundRecursive(arr, target, left, middle - 1, answer);
    } else {
      return leastBoundRecursive(arr, target, middle + 1, right, answer);
    }
  }

  return answer;
}
