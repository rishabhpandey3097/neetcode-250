class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l = 0;
        let summ = 0;
        let minLength = Infinity;

        for(let r = 0; r < nums.length; r++) {
            summ += nums[r];
            while(summ >= target) {
                minLength = Math.min(minLength, r-l+1);
                summ -= nums[l];
                l++
            }
        }

        return minLength === Infinity ? 0 : minLength;
    }
}
