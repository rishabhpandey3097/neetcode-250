class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(char) {
        return (char >= 'a' && char <= 'z') ||
               (char >= 'A' && char <= 'Z') ||
               (char >= 0 && char <= 9)
    }

    isPalindrome(s) {
        let str = '';
        for(const c of s) {
            if(this.isAlphaNumeric(c)) {
                str += c.toLowerCase()
            }
        }

        const clean = str.replaceAll(" ", "");

        let l = 0, r = clean.length -1;
        while(l < r) {
            if(clean[l] !== clean[r]) return false;
            l++;
            r--;
        }
        return true;
    }   
}
