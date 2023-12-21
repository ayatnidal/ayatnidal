function twoSum(nums, target) {
    // Create a map to store the indices of elements
    const numMap = new Map();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement (the value needed to reach the target)
        const complement = target - nums[i];

        // Check if the complement is in the map
        if (numMap.has(complement)) {
            // If yes, return the indices of the two numbers
            return [numMap.get(complement), i];
        }

        // If the complement is not in the map, store the current number and its index
        numMap.set(nums[i], i);
    }

    // If no solution is found, return an empty array or handle it as needed
    return [];
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]
