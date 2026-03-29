class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let n = nums.length - 1;
        for(let i = 0; i < k; i++) {
            for(let j = n; j > 0; j--) {
                [nums[j], nums[j-1]] = [nums[j-1], nums[j]]
            }
        }
    }
}
