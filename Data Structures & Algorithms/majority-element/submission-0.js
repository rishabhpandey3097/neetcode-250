class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let counter = {};
        for(let num of nums) {
            counter[num] = (counter[num] || 0) + 1
        }

        for(let key of Object.keys(counter)) {
            if(counter[key] > nums.length/2) {
                return key;
            }
        }
    }
}
