function transformString(s) {
    const length = s.length;

    if (length % 15 === 0) {
        // Divisible by 15
        s = s.split('').reverse().join('');  // Reverse the string
        s = s.split('').map(char => char.charCodeAt(0)).join('');  // Replace each character with its ASCII code
    } else if (length % 3 === 0) {
        // Divisible by 3 but not 15
        s = s.split('').reverse().join('');  // Reverse the string
    } else if (length % 5 === 0) {
        // Divisible by 5 but not 15
        s = s.split('').map(char => char.charCodeAt(0)).join('');  // Replace each character with its ASCII code
    }

    return s;
}

// Examples to test the function
console.log(transformString("hello"));  // Length 5, expect ASCII codes
console.log(transformString("world"));  // Length 5, expect ASCII codes
console.log(transformString("foobar"));  // Length 6, expect reversed
console.log(transformString("abcdefghijklmno"));  // Length 15, expect reversed and ASCII codes
