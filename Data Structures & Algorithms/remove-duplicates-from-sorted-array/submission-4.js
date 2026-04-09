class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let k = 0;
        let l = 0;

        for(let r = 0; r < nums.length; r++) {
            if(nums[l] !== nums[r]) {
                l++;
                [nums[l], nums[r]] = [nums[r], nums[l]];
                k++;
            }
        }
        return k + 1
    }
}
