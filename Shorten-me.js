
function decodeString (s) {
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        let count = 1;
        while (i + 1 < s.length && s.charAt(i) == s.charAt(i + 1)) {
            i++;
            count++;
        }
        ans = ans.concat(count + s.charAt(i));
    }
    return ans;
};

function encodeString (s) {
    let ans = "";
    let temp = 0;
    for (let x of s) { 
        if (!isNaN(x)) {
            temp = 10 * temp + parseInt(x);
        }
        else {
            for (let i = 0; i < temp; i++) {
                ans = ans.concat(x);
            }
            temp = 0;
        }
    }
    return ans;

};

console.log(decodeString("AAAAAAAAAAABWWWWWWWWWWWBB"));
console.log(encodeString("11A1B11W2B"));