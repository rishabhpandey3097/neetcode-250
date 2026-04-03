class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let res = 0;

        for(let num of set) {
            let longest = 1;
            while(set.has(longest + num)) {
                longest++
            }
            res = Math.max(res, longest)
        }
        return res;
    }
}
