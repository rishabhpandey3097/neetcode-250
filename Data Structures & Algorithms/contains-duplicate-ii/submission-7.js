class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let map = new Map();

        for(let r = 0; r < nums.length; r++) {
            if(map.has(nums[r]) && r - map.get(nums[r]) <= k) {
                return true
            }else {
                map.set(nums[r], r)
            }
        }
        return false
    }
}
