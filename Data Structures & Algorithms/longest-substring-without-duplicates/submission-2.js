class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let longest = 0;
        let set = new Set();

        for(let r = 0; r < s.length; r++) {
            while(set.has(s[r])) {
                set.delete(s[l]);
                l++
            }
            set.add(s[r])
            let w = (r - l) + 1;
            longest = Math.max(longest, w);
        }
        return longest;
    }
}
