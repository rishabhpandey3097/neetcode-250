class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let sortedS = s.split('').sort();
        let sortedT = t.split('').sort();
        for(let i = 0; i < sortedS.length; i++) {
            if(sortedS[i] !== sortedT[i]) return false;
        }
        return true;
    }
}
