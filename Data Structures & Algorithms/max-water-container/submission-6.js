class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start = 0;
        let end = heights.length - 1;
        let max = -Infinity;

        while(start < end) {
            let diff = end - start;
            let minBar = Math.min(heights[start], heights[end]);
            let currArea = diff * minBar;
            max = Math.max(max, currArea);

            if(heights[start] <= heights[end]) {
                start++
            }else {
                end--
            }
        }
        return max;
    }
}
