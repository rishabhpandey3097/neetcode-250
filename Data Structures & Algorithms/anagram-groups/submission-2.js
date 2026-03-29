class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        for(let str of strs) {
            const sortedStr = str.split('').sort().join('');
            if(map[sortedStr]) {
                map[sortedStr] = [...map[sortedStr], str]
            }else {
                map[sortedStr] = [str]
            }
        }
        return Object.values(map);
    }
}
