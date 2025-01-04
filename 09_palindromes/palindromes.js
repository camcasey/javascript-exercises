const palindromes = function (str) {
    let newString = str.toLowerCase();
    newString = newString.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()'?]/g, "");

    let reversedStr = newString.split('').reverse().join('');
    return reversedStr === newString; 
};

// Do not edit below this line
module.exports = palindromes;
