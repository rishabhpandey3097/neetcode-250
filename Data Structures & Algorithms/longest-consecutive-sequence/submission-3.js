class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let maxConsecutiveNums = 0;

        for(let num of set) {
            if(set.has(num)) {
                let length = 1;
                while(set.has(num + length)) {
                    length++
                }
                maxConsecutiveNums = Math.max(maxConsecutiveNums, length)
            }
        }
        return maxConsecutiveNums
    }
}
