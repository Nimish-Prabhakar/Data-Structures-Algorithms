console.log(leastBoundIterative([1, 2, 3, 4, 5, 6, 8, 8, 9, 11, 12], 7));

console.log(leastBoundRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12], 11));

// Least Bound is the samllest index greater or equal to target
// smallest arr[i] >= target

// Iterative Approach
function leastBoundIterative(arr, target) {
  let length = arr.length;

  let left = 0;
  let right = length - 1;

  let middle = Math.floor((left + right) / 2);

  while (left <= right) {
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return middle - 1;
}

// Recursive Approach
function leastBoundRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  let middle = Math.floor((left + right) / 2);

  if (arr[middle] === target) {
    return middle;
  } else if (arr[middle] < target) {
    left = middle + 1;
    return leastBoundRecursive(arr, target, left, right);
  } else {
    right = middle - 1;
    return leastBoundRecursive(arr, target, left, right);
  }
}
