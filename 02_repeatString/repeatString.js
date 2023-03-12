const repeatString = function(string, loops) {
    if (loops < 0) {
        return "ERROR"
    }

    returnString = ''
    
    for (; loops > 0; loops--) {
        returnString += string
    }

    return returnString
};

// Do not edit below this line
module.exports = repeatString;
