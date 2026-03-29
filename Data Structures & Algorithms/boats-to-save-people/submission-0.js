class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a-b);
        let left = 0;
        let right = people.length-1;
        let boats = 0;

        while(left <= right) {
            let sum = people[left] + people[right];
            if(left === right) {
                boats++;
                break;
            }else if(sum <= limit) {
                left++;
                right--;
                boats++
            }else {
                right--;
                boats++;
            }
        }
        return boats;
    }
}
