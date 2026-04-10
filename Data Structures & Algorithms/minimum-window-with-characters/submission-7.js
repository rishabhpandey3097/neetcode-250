class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length > s.length) return "";

        let freq = {};
        for(let c of t) {
            freq[c] = (freq[c] || 0) + 1
        }

        let l = 0;
        let start = 0;
        let count = 0;
        let minLen = Infinity;
        let window = {};

        for(let r = 0; r < s.length; r++) {
            let rightChar = s[r];
            window[rightChar] = (window[rightChar] || 0) + 1;

            if(freq[rightChar] && window[rightChar] <= freq[rightChar]) {
                count++
            }

            while(count === t.length) {
                if(r-l+1 < minLen) {
                    minLen = r - l + 1;
                    start = l
                }

                let leftChar = s[l];
                window[leftChar]--

                if(freq[leftChar] && window[leftChar] < freq[leftChar]) {
                    count--
                }
                l++
            }
        }

        return minLen === Infinity ? "" : s.substring(start, start + minLen)
    }
}
