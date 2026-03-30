class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let buyingPrice = Infinity;
       let maxProfit = 0;

       for(let price of prices) {
        if(price < buyingPrice) {
            buyingPrice = price;
        }
        let currProfit = price - buyingPrice;
        maxProfit = Math.max(currProfit, maxProfit);
       }
       return maxProfit;
    }
}
