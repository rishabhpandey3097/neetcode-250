class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(arr) {
        arr = arr.sort((a, b) => a - b);
        let ans = [];

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > 0) break;

            if(arr[i] === arr[i - 1]) continue;

            let lo = i+1,
                hi = arr.length - 1;

            while(lo < hi) {
                let sum = arr[i] + arr[lo] + arr[hi];

                if(sum === 0) {
                    ans.push([arr[i], arr[lo], arr[hi]]);
                    lo++;
                    hi--;

                    while(lo < hi && arr[lo] === arr[lo - 1]) lo++;
                    while(lo < hi && arr[hi] === arr[hi + 1]) hi--;
                }

                if(sum < 0) lo++;
                if(sum > 0) hi--;
            }
        }
        return ans;
    }
}
