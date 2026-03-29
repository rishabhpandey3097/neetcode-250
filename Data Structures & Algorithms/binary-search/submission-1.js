class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let mid = Math.floor((left + right)/2);

        while (left <= right) {
            if(nums[mid] === target) {
                return mid;
            }else if(nums[mid] < target) {
                left = mid+1;
            }else {
                right = mid-1
            }
            mid = Math.floor((left+right)/2)
        }
        return -1;
    }
}
