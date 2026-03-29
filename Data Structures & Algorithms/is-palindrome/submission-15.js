class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(char) {
        return (char >= 'a' && char <= 'z') ||
               (char >= 'A' && char <= 'Z') ||
               (char >= '0' && char <= '9')
    }

    isPalindrome(s) {
        let l = 0,
            r = s.length-1;

        while(l < r) {
            if(l < r && !this.isAlphaNumeric(s[l])) {
                l++;
                continue;
            }
            if(r > l && !this.isAlphaNumeric(s[r])) {
                r--;
                continue;
            }
            if(s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }   
}
