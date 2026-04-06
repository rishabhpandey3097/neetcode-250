class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
       if(t.length > s.length) return ""

       let freqT = {};
       for(let c of t) {
        freqT[c] = (freqT[c] || 0) + 1
       }

       let l = 0;
       let start = 0;
       let count = 0;
       let minLen = Infinity;
       let window = {}

       for(let r = 0; r < s.length; r++) {
        let rightChar = s[r];
        window[rightChar] = (window[rightChar] || 0) + 1;

        if(freqT[rightChar] && window[rightChar] <= freqT[rightChar]) {
            count++
        }
        while(count === t.length) {
          let leftChar = s[l];
          window[leftChar]--;

          if(r-l+1 < minLen) {
                minLen = r-l+1;
                start = l
            }  

          if(freqT[leftChar] && window[leftChar] < freqT[leftChar]) {
            count--
          }  

          l++
        }
       }
       return minLen === Infinity ? "" : s.substring(start, start + minLen);
    }
}
