class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let counter = {};
        for(let n of nums) {
            counter[n] = (counter[n] || 0) + 1;
        }

        for(let key in counter) {
            if(counter[key] > 1) return true
        }
        return false
     }
}
