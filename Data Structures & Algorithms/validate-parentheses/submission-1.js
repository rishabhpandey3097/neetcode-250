class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let map = {
            ')': '(',
            ']': '[',
            '}': '{'
        }

        for(let c of s) {
            if(map[c]) {
                if(stack[stack.length - 1] === map[c]) {
                    stack.pop()
                }else {
                    return false
                }
            }else {
                stack.push(c)
            }
        }
        return stack.length === 0 ? true: false;
    }
}
