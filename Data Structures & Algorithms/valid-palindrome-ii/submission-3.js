class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0,
            r = s.length - 1;

        while(l < r) {
            if(s[l] !== s[r]) {
                return (
                    this.isPalindrome(s.slice(0, l) + s.slice(l + 1)) ||
                    this.isPalindrome(s.slice(0, r) + s.slice(r + 1))
                )
            }else {
                l++;
                r--;
            }
        }
        return true;
    }

    isPalindrome(str) {
        let left = 0;
        let right = str.length - 1;

        while(left < right) {
            if(str[left] === str[right]) {
                left++;
                right--;
            }else {
                return false
            };
        }
        return true;
    }

    
}
