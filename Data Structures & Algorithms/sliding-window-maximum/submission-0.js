class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let output = [];
        let l = 0;
        let subArray = [];
        let p = 0;

        for(let r = 0; r <= nums.length; r++) {
            if(p % k === 0 && r > 0) {
                let max = Math.max(...subArray);
                output.push(max);
                subArray.splice(0, 1);
                l++;
                p = r - l + 1
            }else {
                p++
            }
            subArray.push(nums[r] || 0)
        }

        return output;
    }
}
