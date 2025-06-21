const repeatString = function(givenStr, givenInt) {
    if (givenInt < 0){
        return "ERROR"
    }

    var returnStr = "";
    for (i = 0; i < givenInt; i++){
       returnStr += givenStr; 
    }
    return returnStr;
};



// Do not edit below this line
module.exports = repeatString;
