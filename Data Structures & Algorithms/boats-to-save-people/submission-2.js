class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);
        let start = 0;
        let end = people.length-1;
        let boats = 0;

        while(start <= end) {
            let sum = people[start] + people[end];

            if(sum <= limit) {
                start++;
                end--;
                boats++
            }else {
                boats++;
                end--;
            }
        }
        return boats;
    }
}
