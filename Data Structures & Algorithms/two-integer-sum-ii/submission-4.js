class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(arr, target) {
        let l = 0,
            r = arr.length - 1;

        while(l < r) {
            const sum = arr[l] + arr[r];
            if(sum === target) {
                return [l+1, r+1]
            }else if(sum < target) {
                l++
            }else {
                r--;
            }
        }
    }
}
