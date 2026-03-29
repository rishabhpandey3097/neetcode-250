class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(arr) {
        let l = 0;

        for(let r = 1; r < arr.length; r++) {
            if(arr[l] !== arr[r]) {
                l++;
                arr[l] = arr[r];
            }
        }

        return l+1
    }
}
