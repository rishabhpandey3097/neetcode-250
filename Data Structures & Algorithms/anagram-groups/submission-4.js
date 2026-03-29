class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for(let str of strs) {
            const sortedStr = str.split('').sort().join('');
            if(!map.get(sortedStr)) {
                map.set(sortedStr, [str])
            }else {
                map.set(sortedStr, [...map.get(sortedStr), str])
            }
        }
        return [...map.values()]
    }
}
