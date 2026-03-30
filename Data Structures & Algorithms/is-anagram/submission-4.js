class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let freq1 = {};
        let freq2 = {};

        let i = 0;
        while(i < s.length) {
            freq1[s[i]] = (freq1[s[i]] || 0) + 1;
            freq2[t[i]] = (freq2[t[i]] || 0) + 1;
            i++;
        }

        for(let char of Object.keys(freq1)) {
            if(freq1[char] !== freq2[char]) {
                return false;
            }
        }
        return true;
    }
}
