class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity;
        let maxProfit = 0;

        for(let price of prices) {
            if(price < minPrice) {
                minPrice = price; // Best day to buy stock
            }else {
                let profit = price - minPrice;
                maxProfit = Math.max(maxProfit, profit);
            }
        }
        return maxProfit;
    }
}
