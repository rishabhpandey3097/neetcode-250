class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        let freq = new Array(26).fill(0);
        for(let c of s1) {
            freq[c.charCodeAt(0) - 97]++
        }

        let l = 0;
        for(let r = 0; r < s2.length; r++){
            freq[s2[r].charCodeAt(0) - 97]--;

            if(r-l+1 > s1.length) {
                freq[s2[l].charCodeAt(0) - 97]++;
                l++;
            }

            if(freq.every(val => val === 0)) {
                return true
            }
        }
        return false
    }
}
