class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let freqS = {};
        let freqT = {};

        for(let i = 0; i < s.length; i++) {
            freqS[s[i]] = (freqS[s[i]] || 0) + 1;
            freqT[t[i]] = (freqT[t[i]] || 0) + 1;
        }

        for(let key in freqS) {
            if(freqS[key] !== freqT[key]) {
                return false
            }
        }

        return true;
    }
}
