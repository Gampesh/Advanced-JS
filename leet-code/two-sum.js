/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]

*/
var twoSum = function(nums, target) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const mapValue = target - nums[i];
            if (!map.has(nums[i])) {
                map.set(mapValue, i);
            } else {
                return [map.get(nums[i]), i];
            }
        }
    return result;
};

let num = [11, 15,2, 7];  //[3,2,4];
let target = 9;  //6;
console.log(twoSum(num, target));
