class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        let leftArr = [];
        let rightArr = [];
        let total = 0;

        leftArr[0] = height[0];
        rightArr[n-1] = height[n-1];

        for(let i = 1; i < height.length; i++) {
            leftArr[i] = Math.max(leftArr[i - 1], height[i])
        }

        for(let i = n - 2; i >= 0; i--) {
            rightArr[i] = Math.max(rightArr[i + 1], height[i])
        }

        for(let i = 0; i < height.length; i++) {
            total += Math.min(leftArr[i], rightArr[i]) - height[i]
        }

        return total
    }
}
