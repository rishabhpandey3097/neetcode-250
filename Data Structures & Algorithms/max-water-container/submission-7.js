class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let maxArea = -Infinity;
        let r = heights.length - 1;

        while(l < r) {
            const minBar = Math.min(heights[l], heights[r]);
            let diff = r - l;
            let currArea = minBar * diff;
            maxArea = Math.max(currArea, maxArea);

            if(heights[l] <= heights[r]) {
                l++
            }else {
                r--
            }
        }
        return maxArea;
    }
}
