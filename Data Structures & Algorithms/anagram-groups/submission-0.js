class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let output = {};

        for(let s of strs) {
            let sortedWord = s.split('').sort().join('');
            if(output[sortedWord]) {
                output[sortedWord] = [...output[sortedWord], s]
            }else {
                output[sortedWord] = [s]
            }
        }
        return Object.values(output)
    }
}
