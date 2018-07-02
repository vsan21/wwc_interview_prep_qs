//Palindrome:
//SHORT: 
// function palindrome(str) {
//     return str === str.split("").reverse().join("");
// }

//RECURSION:
function firstChar(str) {
    return str.slice(0, 1);
}

function lastChar(str) {
    return str.slice(-1);
}

function middle(str) {
    return str.slice(1, -1);
}

function palindrome(str) {
    if (str.length === 0 || str.length === 1) {
        return true;
    }

    if (firstChar(str) === lastChar(str)) {
        return palindrome(middle(str));
    }
    return false;
}

describe("palindrome", () => {
    it("should return true for the string 'tacocat'", () => {
        expect(palindrome('tacocat')).toBe(true)
    })
    it("should return false for the string 'radix'", () => {
        expect(palindrome('radix')).toBe(false)
    })
})