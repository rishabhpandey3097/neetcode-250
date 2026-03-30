class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let l = 0;

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] !== val) {
                [nums[i], nums[l]] = [nums[l], nums[i]];
                l++
            }
        }
        return l;
    }
}
