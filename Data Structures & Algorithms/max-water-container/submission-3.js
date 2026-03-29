class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;

        let maxArea = 0;

        while(left < right) {
            let minBar = Math.min(heights[left], heights[right]);
            let diff = right - left;
            let currentArea = minBar * diff;
            maxArea = Math.max(maxArea, currentArea);

            if(heights[left] <= heights[right]) {
                left++
            }else {
                right--;
            }
        }

        return maxArea;
    }
}
