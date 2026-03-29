class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0,
            r = heights.length - 1,
            max = 0;

        while(l < r) {
            let minBar = Math.min(heights[l], heights[r]);
            let diff = r - l;
            let currentArea = minBar * diff;
            max = Math.max(max, currentArea);

            if(heights[l] <= heights[r]) {
                l++;
            }else {
                r--;
            }
        }

        return max;
    }
}
