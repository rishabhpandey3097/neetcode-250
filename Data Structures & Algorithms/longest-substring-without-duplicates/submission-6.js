class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let longest = 0;
        let set = new Set();

        for(let right = 0; right < s.length; right++) {
            while(set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]);
            let w = (right - left) + 1;
            longest = Math.max(longest, w);
        }

        return longest;
    }
}
