class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums.sort((a, b) => a - b);
        let ans = [];
        let n = nums.length;

        for(let i = 0; i < n; i++){
            if(i > 0 && nums[i] === nums[i-1]) continue;

            for(let j = i+1; j < n; j++) {
                if(j > i+1 && nums[j] === nums[j-1]) continue;

                let lo = j+1,
                    hi = n-1;

                while(lo < hi) {
                    let sum = nums[i] + nums[j] + nums[lo] + nums[hi];

                    if(sum === target) {
                        ans.push([nums[i], nums[j], nums[lo], nums[hi]]);
                        lo++;
                        hi--;

                        while(lo < hi && nums[lo] === nums[lo-1]) lo++;
                        while(lo < hi && nums[hi] === nums[hi+1]) hi--;
                    }

                    if(sum < target) lo++;
                    if(sum > target) hi--;
                }
            }
        }
        return ans;
    }
}
