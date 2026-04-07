class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let maxProfit = 0;
       let minPrice = Infinity;

       for(let price of prices) {
        if(price < minPrice) {
            minPrice = price;
        }
        let currProfit = price - minPrice;
        maxProfit = Math.max(maxProfit, currProfit)
       }
       return maxProfit;
    }
}
