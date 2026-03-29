class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(!nums.length) return [];
        const map = new Map();
        for(let i = 0; i < nums.length; i++) {
            let comp = target - nums[i];
            if(map.has(comp)) {
                return [map.get(comp), i]
            }

            map.set(nums[i], i)
        }
        return [];
        }
}
