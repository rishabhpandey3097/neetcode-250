class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(arr, target) {
        let l = 0;
        let r = arr.length-1;

        while(l < r) {
            let sum = arr[l] + arr[r];
            if(sum < target) {
                l++
            }else if(sum > target) {
                r--
            }else {
                return [l+1, r+1]
            }
        }
    }
}
