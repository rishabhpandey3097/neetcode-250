class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let maxConsecutives = 0;

        for(let num of nums) {
            let length = 1;
            while(set.has(num + length)) {
                length++;
            }
            maxConsecutives = Math.max(maxConsecutives, length)
        }
        return maxConsecutives;
    }
}
