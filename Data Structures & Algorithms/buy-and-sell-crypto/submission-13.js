class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyingPrice = Infinity;
        let max = 0;

        for(let r = 0; r < prices.length; r++) {
            if(prices[r] < buyingPrice) {
                buyingPrice = prices[r]
            }
            let currProfit = prices[r] - buyingPrice;
            max = Math.max(currProfit, max)
        }
        return max;
    }
}
