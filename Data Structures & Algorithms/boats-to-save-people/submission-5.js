class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);
        let l = 0;
        let r = people.length - 1;
        let res = 0;

        while(l <= r) {
            let sum = people[l] + people[r];
            if(sum <= limit) {
                res++;
                l++;
                r--
            }else if (sum > limit) {
                res++;
                r--
            }
        }
        return res;
    }
}
