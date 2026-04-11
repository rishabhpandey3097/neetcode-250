class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];

        for(let op of operations) {
            if(op === '+') {
                const top = stack.pop();
                const newTop = top + stack[stack.length - 1];
                stack.push(top);
                stack.push(newTop);
            }else if (op === 'C') {
                stack.pop()
            }else if(op === 'D') {
                let double = stack[stack.length - 1] * 2;
                stack.push(double)
            }else {
                stack.push(parseInt(op))
            }
        }

        return stack.reduce((acc, curr) => acc + curr, 0);
    }
}
