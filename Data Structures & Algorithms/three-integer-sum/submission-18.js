class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(arr) {
        arr.sort((a, b) => a - b);
        let res = [];

        for(let i = 0; i < arr.length; i++) {
            if(i > 0 && arr[i] === arr[i-1]) continue;

            if(arr[i] > 0) break;

            let j = i+1;
            let k = arr.length - 1;

            while(j < k) {
                let sum = arr[i] + arr[j] + arr[k];

                if(sum === 0) {
                    res.push([arr[i], arr[j], arr[k]]);
                    j++;
                    k--;

                    while(j < k && arr[j] === arr[j-1]) j++;
                    while(j < k && arr[k] === arr[k+1]) k--;
                }

                if(sum < 0) {
                    j++
                }

                if(sum > 0) {
                    k--
                }
            }
        }

        return res;
    }
}
