class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let counterS = {};
        let counterT = {};

        for(let i = 0; i < s.length; i++) {
            counterS[s[i]] = (counterS[s[i]] || 0) + 1;
            counterT[t[i]] = (counterT[t[i]] || 0) + 1;
        }

        for(const key in counterS) {
            if(counterS[key] !== counterT[key]) return false;
        }
        return true;
    }
}
