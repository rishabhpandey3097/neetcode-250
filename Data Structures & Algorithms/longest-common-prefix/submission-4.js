class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let n = Infinity;

        for(let str of strs) {
            if(str.length < n) {
                n = str.length
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

        return strs[0].slice(0, l);
    }
}
