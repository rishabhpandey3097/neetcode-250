class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(arr) {
       let k = 0;

       for(let i = 0; i < arr.length; i++) {
        if(arr[k] !== arr[i]) {
            k++;
            arr[k] = arr[i];
        }
       }
       return k+1;
    }
}
