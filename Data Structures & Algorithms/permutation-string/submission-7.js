class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        let freq = new Array(26).fill(0);
        for(let c of s1) {
            freq[c.charCodeAt(0) - 97]++
        }

        let l = 0;
        let count = s1.length;

        for(let r = 0; r < s2.length; r++) {
            let rightChar = s2[r].charCodeAt(0) - 97;
            if(freq[rightChar] > 0) {
                count--
            }
            freq[rightChar]--;
            
            if(r-l+1 > s1.length) {
                let leftChar = s2[l].charCodeAt(0) - 97;
                if(freq[leftChar] >= 0) {
                    count++
                }
                freq[leftChar]++
                l++
            }

            if(count === 0) return true;
        }
        return false;
    }
}
