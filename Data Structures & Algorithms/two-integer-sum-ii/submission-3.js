class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(arr, target) {
        let lo = 0,
            hi = arr.length - 1;

        while(lo < hi) {
            const sum = arr[lo] + arr[hi];
            if(sum === target) {
                return [lo+1, hi+1]
            }

            if(sum < target) lo++;
            if(sum > target) hi--;
        }
    }
}
