class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let half = Math.floor(nums.length/2);
        let freq = {};

        for(let num of nums) {
            freq[num] = (freq[num] || 0) + 1;
            if(freq[num] > half) {
                return num
            }
        }
        return -1;
    }
}
