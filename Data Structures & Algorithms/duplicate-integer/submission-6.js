class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let freq = {};
        for(let num of nums) {
            freq[num] = (freq[num] || 0) + 1;
            if(freq[num] > 1) {
                return true;
            };
        };
        return false;
    }
}
