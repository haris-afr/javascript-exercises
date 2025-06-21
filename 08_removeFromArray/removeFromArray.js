const removeFromArray = function(givenArray, ...args) {
    for (i = 0; i < args.length; i++){
        while (givenArray.includes(args[i])){
            givenArray.splice(givenArray.indexOf(args[i]), 1);
        }
    }
    return givenArray;
};

removeFromArray([1, 2, 2, 3], 2)
// Do not edit below this line
module.exports = removeFromArray;
