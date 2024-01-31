// Brute Force Solution
function twoSumBruteForce(nums, target) {
  /**
   * Brute-force solution to find two numbers in the array
   * that add up to the given target.
   *
   * Time Complexity: O(n^2)
   * Space Complexity: O(1)
   */

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

// Optimized Solution using Hash Table
function twoSumOptimized(nums, target) {
  /**
   * Optimized solution using a hash table to store
   * previously seen numbers.
   *
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   * ## Key Points:
   * - The optimized solution uses a hash table to store the indices of previously seen numbers.
   * - Iterating through the array, it calculates the complement for each number and checks if the complement is in the hash table.
   * - If found, it returns the indices of the two numbers. Otherwise, it adds the current number and its index to the hash table.
   * - This reduces the time complexity to O(n) compared to the brute-force solution, which has a time complexity of O(n^2).
   * - The space complexity increases to O(n) due to the hash table, but this is considered a reasonable trade-off for the improved time complexity.
   * - The optimized solution is more efficient, especially for large input arrays.
   */

  const numIndices = {};
  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];
    if (remainder in numIndices) {
      return [numIndices[remainder], i];
    }
    numIndices[nums[i]] = i;
  }
  return null;
}
