class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        let l = 0;
        let maxCount = 0;
        let zerosFound = 0;

        for(let r = 0; r < nums.length; r++) {
            if(nums[r] === 0) {
                zerosFound++
            }

            while(zerosFound > k) {
                if(nums[l] === 0) {
                    zerosFound--
                }
                l++
            }
            maxCount = Math.max(maxCount, r - l + 1)
        }
        return maxCount
    }
}
