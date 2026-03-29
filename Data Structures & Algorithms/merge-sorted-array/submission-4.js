class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
       let x = m-1;
       let y = n-1;

       for(let z = m+n-1; z >= 0; z--) {
        if(x < 0) {
            nums1[z] = nums2[y];
            y--
        }else if(y < 0) {
            break;
        }else if(nums1[x] > nums2[y]) {
            nums1[z] = nums1[x];
            x--
        }else {
            nums1[z] = nums2[y];
            y--
        }
       }
    }
}
