// Brute Force Solution
function threeSumBruteForce(nums, target) {
  /**
   * Brute-force solution to find three numbers in the array
   * that add up to the given target.
   * Get all unique sets available in an array form
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
   *
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

console.log(threeSumHashMap([-1, 0, 1, 2, -1, -4], 0));
