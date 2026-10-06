

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let num = {};
    for (let a of s) {
        num[a] = (num[a] || 0) + 1;
    }

    for (let a of t) {

        if (!num[a]) return false;
        num[a]--;
    }
    
    return true;
};