class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       let freq = {};
       let res = [];

       for(let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
       } 

       const sortedByFreq = Object.entries(freq).sort((a, b) => a[1] - b[1]);
       res = sortedByFreq.slice(-k).map(a => +a[0]);

       return res;
    }
}
