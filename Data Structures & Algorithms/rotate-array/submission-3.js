class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        k = k % nums.length;
        let l = 0, 
            r = nums.length - 1;
        this.reverse(nums, l, r);

        l = 0, r = k - 1;
        this.reverse(nums, l, r);

        l = k, r = nums.length-1;
        this.reverse(nums, l, r);
    }

    reverse(arr, l, r) {
        while(l < r) {
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l++;
            r--;
        }
    }
}
