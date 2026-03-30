class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       let set = new Set();
       let l = 0;
       let maxSubLength = 0;

       for(let r = 0; r < s.length; r++) {
        while(set.has(s[r])) {
            set.delete(s[l]);
            l++;
        }
        set.add(s[r]);
        maxSubLength = Math.max(maxSubLength, r-l+1)
       }

       return maxSubLength;
    }
}
