const reverseString = function(string) {
    let answer = '';
    for(let i = string.length; i >= 0; i--){
        answer += string.charAt(i);
    }
    return answer;
};

// Do not edit below this line
module.exports = reverseString;
