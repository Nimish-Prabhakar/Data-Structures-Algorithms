

function binarySearch(nums, low, high, target) {
    if (low > high) return -1; // Base case.

    // Perform the steps:
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    else if (target > nums[mid])
        return binarySearch(nums, mid + 1, high, target);
    return binarySearch(nums, low, mid - 1, target);
}

function search(nums, target) {
    return binarySearch(nums, 0, nums.length - 1, target);
}

let a = [3, 4, 6, 7, 9, 12, 16, 17];
let target = 6;
let ind = search(a, target);
if (ind === -1) console.log("The target is not present.");
else console.log("The target is at index:", ind);
