class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let n = s.length;
        let l = 0;
        let r = n - 1;

        while(l < r) {
            if(!this.isAlphanumeric(s[l])) {
                l++;
                continue;
            }

            if(!this.isAlphanumeric(s[r])) {
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

    isAlphanumeric(char) {
        return /^[a-z0-9]+$/i.test(char);
    }
}
