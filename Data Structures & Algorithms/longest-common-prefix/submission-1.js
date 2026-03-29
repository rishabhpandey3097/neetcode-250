class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let n = Infinity;

        for(let s of strs) {
            if(s.length < n) {
                n = s.length;
            }
        }

        let l = 0;

        while(l < n) {
            for(let s of strs) {
                if(s[l] !== strs[0][l]) {
                    return s.slice(0, l)
                }
            }
            l++
        }
        return strs[0].slice(0, l)
    }
}
