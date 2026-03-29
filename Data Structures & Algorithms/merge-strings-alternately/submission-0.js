class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let str = "";
        let n = Math.max(word1.length, word2.length);

        for(let i = 0; i < n; i++) {
            if(word1[i] && word2[i]) {
                str += `${word1[i]}${word2[i]}`
            }else if(!word1[i]) {
                str += `${word2[i]}`
            }else {
                str += `${word1[i]}`
            }
        }
        return str;
    }
}
