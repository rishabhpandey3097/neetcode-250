class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let n = nums.length;
        let freq = {};
        let res = [];

        for(let num of nums) {
            freq[num] = (freq[num] || 0) + 1
        }

        for(const [key, value] of Object.entries(freq)) {
            if(value > n/3) {
                res.push(Number(key))
            }
        }

        return res
    }
}
