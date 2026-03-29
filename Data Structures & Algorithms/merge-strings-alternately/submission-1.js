class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let newStr = '';
        let n = Math.max(word1.length, word2.length);

        for(let i = 0; i < n; i++) {
            if(word1[i] && word2[i]) {
                newStr += `${word1[i]}${word2[i]}`
            }else if(!word1[i]) {
                newStr += word2[i]
            }else {
                newStr += word1[i]
            }
        }
        return newStr;
    }
}
