class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b);
        let ans = [];

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] > 0) break; // sum will always be greatere than 0 but never 0
            if(nums[i] === nums[i - 1]) continue; // cause we need distinct indexes

            let lo = i+1;
            let hi = nums.length - 1;

            while(lo < hi) {
                let sum = nums[i] + nums[lo] + nums[hi];

                if(sum === 0) {
                    ans.push([nums[i], nums[lo], nums[hi]]);
                    lo++;
                    hi--;

                    while(lo < hi && nums[lo] === nums[lo - 1]) {
                        lo++
                    }

                    while(lo < hi && nums[hi] === nums[hi + 1]) {
                        hi--
                    }
                } else if(sum < 0) {
                    lo++
                } else {
                    hi--
                }
            }
        }

        return ans;
    }
}
