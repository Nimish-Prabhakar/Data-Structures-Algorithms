console.log(threeSumHashMap([-1, 0, 1, 2, -1, -4], 0));

// Brute Force Solution
function threeSumBruteForce(nums, target) {
  /**
   * Brute-force solution to find three numbers in the array
   * that add up to the given target.
   * Get all unique sets available in an array form
   * We are using "Some" and "Every" array methods
   * Time Complexity: O(n^3)
   * Space Complexity: O(1)
   */

  let resultArray = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === target) {
          let tempArray = [nums[i], nums[j], nums[k]].sort();
          let exists = resultArray.some(
            (innerArray) =>
              innerArray.length === tempArray.length &&
              innerArray.every((val, idx) => val === tempArray[idx])
          );
          if (!exists) {
            resultArray.push(tempArray);
          }
        }
      }
    }
  }
  return resultArray;
}

// Hash Map Solution with HashSet
function threeSumHashMap(nums, target) {
  /**
   * Hash Map solution to find three numbers in the array
   * that add up to the given target.
   *
   * Time Complexity: O(n^2)
   * Space Complexity: O(n)
   * Taking two sum as a reference for this solution
   * Here first with i - we are keeping track of remaining sum
   * Then with j - we check if the last remainder value is in the stored set
   * We epmty "let storedValues = {}" on each new iteration of i
   * ... so that same values aren't repeated when math is applied
   * Here we use set to store values and check for unique identifiers after
   *  ...converting them to strings
   */

  let resultArray = [];
  let seenSets = new Set();

  for (let i = 0; i < nums.length - 2; i++) {
    let remainingTarget = target - nums[i];
    let storedValues = {};

    for (let j = i + 1; j < nums.length; j++) {
      let complement = remainingTarget - nums[j];
      if (complement in storedValues) {
        let currentSet = [nums[i], complement, nums[j]].sort();
        let currentSetString = JSON.stringify(currentSet);

        if (!seenSets.has(currentSetString)) {
          resultArray.push(currentSet);
          seenSets.add(currentSetString);
        }
      }
      storedValues[nums[j]] = true;
    }
  }

  return resultArray;
}

// Two Pointer Optimised Method
function threeSumTwoPointer(nums, target) {
  /**
   * Two Pointer solution to find three numbers in the array
   * that add up to the given target.
   *
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   *
   * Here we handle three pointers in a sorted array
   * Since array is already sorted, no need to create a set for uniqueness
   */

  let resultArray = [];
  nums.sort((a, b) => a - b); // Sort the input array

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates for the first element
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        resultArray.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for left and right pointers
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return resultArray;
}
