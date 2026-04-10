class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    numSubarrayProductLessThanK(nums, k) {
        let l = 0;
        let res = 0;
        let prod = 1;

        for(let r = 0; r < nums.length; r++) {
            prod *= nums[r]

            while(l <= r && prod >= k) {
                prod = Math.floor(prod / nums[l++]);
            }
            res += r - l + 1
        }
        return res;
    }
}
