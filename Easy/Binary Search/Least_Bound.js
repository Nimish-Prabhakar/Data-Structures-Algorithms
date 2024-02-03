console.log(leastBoundIterative([1, 2, 3, 4, 5, 6, 8, 8, 9, 11, 12], 7));

console.log(leastBoundRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12], 11));

// Least / Lower Bound is the samllest index greater or equal to target
// smallest arr[i] >= target

// Question - Search Insert Position
// Find the index where an element needs to be added in a sorted array
// [1,2,5,9,13] , 7 -- this will go before 9, i.e. , at index of 9
// This problem is in a way asking for lower bound

// Question - Implement floor and ceil
// Math.floor() and Math.ceil() -- both are examples for lower / upper bound in BS

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
