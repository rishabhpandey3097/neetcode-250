class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0;
        let r = s.length-1;

        while(l < r) {
            if(s[l] !== s[r]) {
                return (
                    this.isPalindrome(s.slice(0, l) + s.slice(l+1)) ||
                    this.isPalindrome(s.slice(0, r) + s.slice(r+1))
                )
            }
            l++;
            r--;
        }
        return true;
    }

    isPalindrome(s) {
        let l = 0;
        let r = s.length-1;

        while(l < r) {;
            const leftChar = s[l].toLowerCase();
            const rightChar = s[r].toLowerCase();
            if(leftChar !== rightChar) {
                return false;
            }
            l++;
            r--;
        }
        return true
    }
}
