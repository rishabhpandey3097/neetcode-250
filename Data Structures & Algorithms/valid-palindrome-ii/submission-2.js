class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let left = 0;
        let right = s.length-1;

        while(left < right) {
            if(s[left] !== s[right]) {
                return (
                    this.isPalindrome(s.slice(0, left) + s.slice(left + 1)) ||
                    this.isPalindrome(s.slice(0, right) + s.slice(right + 1))
                )
            }
            left++;
            right--;
        }
        return true;
    }

    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        while(left < right) {
            if(s[left] === s[right]) {
                left++;
                right--
            }else {
                return false;
            }
        }
        return true;
    }
}
