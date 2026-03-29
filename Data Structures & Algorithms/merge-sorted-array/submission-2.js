class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let num1Length = nums1.length;
        this.reverse(nums1, 0, num1Length-1); // [0, 0, 40, 30, 20, 10]

        this.reverse(nums1, n, num1Length-1); // [0, 0, 10, 20, 30, 40]

        for(let i = 0; i < n; i++) {
            nums1[i] = nums2[i] 
        }
        // [1, 2, 10, 20, 30, 40]

        nums1.sort((a, b) => a - b);
    }

    reverse(arr, start, end) {
        while(start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--
        }
    }
}
