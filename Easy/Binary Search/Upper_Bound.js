console.log(upperBoundIterative([1, 2, 5, 9, 11, 13, 15, 23, 41, 77], 29));

console.log(upperBoundIterative([1, 2, 5, 9, 11, 13, 15, 23, 41, 77], 3));

// Upper Bound is the highest index smaller or equal to target
// smallest arr[i] <= target

// Question - Search Insert Position
// Find the index where an element needs to be added in a sorted array
// [1,2,5,9,13] , 7 -- this will go before 9, i.e. , at index of 9
// This problem is in a way asking for lower bound

// Question - Implement floor and ceil
// Math.floor() and Math.ceil() -- both are examples for lower / upper bound in BS

// Iterative Approach
function upperBoundIterative(arr, target) {
  let length = arr.length;

  let left = 0;
  let right = length - 1;
  let answer = length;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] <= target) {
      answer = middle;
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return answer;
}

// Recursive Approach
function upperBoundRecursive(
  arr,
  target,
  left = 0,
  right = arr.length - 1,
  answer = arr.length
) {
  if (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] <= target) {
      answer = middle;
      return upperBoundRecursive(arr, target, middle + 1, right, answer);
    } else {
      return upperBoundRecursive(arr, target, left, middle - 1, answer);
    }
  }

  return answer;
}
