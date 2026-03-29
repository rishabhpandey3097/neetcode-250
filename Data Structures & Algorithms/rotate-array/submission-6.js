class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let n = nums.length;
        k = k % n;
        // reverse entire array
        this.reverse(nums, 0, n-1);

        // revrse first part
        this.reverse(nums, 0, k-1);

        //reverse second part
        this.reverse(nums, k, n-1);
    }

    reverse(arr, l, r) {
        while(l < r) {
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l++;
            r--;
        }
    }
}
