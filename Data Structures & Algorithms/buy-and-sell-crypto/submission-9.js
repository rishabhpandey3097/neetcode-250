class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity;
        let maxPrice = 0;

        for(let price of prices) {
            if (price < minPrice) {
                minPrice = price; // Best day to buy
            }else {
                let profit = price - minPrice;
                maxPrice = Math.max(maxPrice, profit)
            }
        }
        return maxPrice;
    }
}
