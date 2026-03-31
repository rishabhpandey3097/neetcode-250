class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let map = new Map();
        let res = 0;
        let currSum = 0;
        map.set(0, 1);

        for(let num of nums) {
            currSum += num;
            let diff = currSum - k;
            res += map.get(diff) || 0;
            map.set(currSum, (map.get(currSum) || 0) + 1);
        }
        return res;
    }
}
