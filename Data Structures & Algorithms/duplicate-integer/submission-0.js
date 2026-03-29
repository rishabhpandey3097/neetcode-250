class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let freqCounter = {};
        for(let num of nums ){
            freqCounter[num] = (freqCounter[num] || 0) + 1;
        }
        for(let k of Object.values(freqCounter)) {
            if(k > 1) return true
        }
        return false
    }
}
