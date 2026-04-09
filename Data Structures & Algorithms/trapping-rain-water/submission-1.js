class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        let leftArray = []
        let rightArray = []
        let total = 0;
        leftArray[0] = height[0];
        rightArray[n-1] = height[n-1];

        for(let i = 1; i < height.length; i++) {
            leftArray[i] = Math.max(leftArray[i-1], height[i])
        }

        for(let i = n - 2; i >= 0; i--) {
            rightArray[i] = Math.max(rightArray[i + 1],  height[i])
        }

        for(let r = 0; r < height.length; r++) {
            total += Math.min(leftArray[r], rightArray[r]) - height[r]
        }

        return total;
    }
}
