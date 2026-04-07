class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let l = 0;
        let len = -Infinity;

        for(let r = 0; r < s.length; r++) {
            while(set.has(s[r])) {
                set.delete(s[l]);
                l++
            }
            set.add(s[r])
            len = Math.max(len, r-l+1)
        }
        return len === -Infinity ? 0 : len;
    }
}
