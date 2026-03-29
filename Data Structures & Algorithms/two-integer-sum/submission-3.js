class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for(let i = 0; i < nums.length; i++) {
            let compliment = target - nums[i];
            if(map.has(compliment)) {
                return [i, map.get(compliment)]
            }
            map.set(nums[i], i)
        }
    }
}
