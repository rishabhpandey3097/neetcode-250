class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
       people.sort((a, b) => a - b);
       let res = 0;
       let l = 0;
       let r = people.length - 1;

       while(l <= r) {
        const sum = people[l] + people[r];
        if(sum <= limit) {
            res++;
            l++;
            r--;
        }else if(sum > limit) {
            r--;
            res++;
        }
       }

       return res;
    }
}
