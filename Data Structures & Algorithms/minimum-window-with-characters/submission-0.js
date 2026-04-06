class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";

        let freqT = {};
        for (let ch of t) {
            freqT[ch] = (freqT[ch] || 0) + 1;
        }

        let l = 0;
        let count = 0;
        let minLen = Infinity;
        let start = 0;

        let window = {};

        for (let r = 0; r < s.length; r++) {
            let ch = s[r];
            window[ch] = (window[ch] || 0) + 1;

            if (freqT[ch] && window[ch] <= freqT[ch]) {
                count++;
            }

            while (count === t.length) {
                if (r - l + 1 < minLen) {
                    minLen = r - l + 1;
                    start = l;
                }

                let leftChar = s[l];
                window[leftChar]--;

                if (freqT[leftChar] && window[leftChar] < freqT[leftChar]) {
                    count--;
                }

                l++;
            }
        }
        
        return minLen === Infinity ? "" : s.substring(start, start + minLen);
    }
}
