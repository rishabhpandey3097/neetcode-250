class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let freq = {};

        for(let num of nums) {
            freq[num] = (freq[num] || 0) + 1;
        }

        for(let value of Object.values(freq)) {
            if(value > 1) {
                return true
            }
        }

        return false;
    }
}
