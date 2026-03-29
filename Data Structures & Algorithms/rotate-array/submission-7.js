class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let n = nums.length;
        k = k % n;

        this.reverse(nums, 0, n-1) // Rotate whole array 0 -> n-1

        this.reverse(nums, 0 , k-1) // Rotate first part 0 -> k

        this.reverse(nums, k, n-1) // Rotate seconf part k -> n-1
    }

    reverse(arr, start, end) {
        while(start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
}
