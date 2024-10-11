const palindromes = function (str) {
    let newString = str.toLowerCase(); 

    let reversedStr = newString.split('').reverse().join('');
    return reversedStr === newString; 
};

// Do not edit below this line
module.exports = palindromes;
