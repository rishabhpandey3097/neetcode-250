class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);

        let start = 0;
        let end = people.length - 1;
        let boats = 0;

        while(start <= end) {
            const sum = people[start] + people[end];
            if(start === end) {
                boats++;
                break
            }else if(sum <= limit){
                start++;
                end--;
                boats++;
            }else {
                end--;
                boats++;
            }
        }
        return boats;
    }
}
