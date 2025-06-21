const sumAll = function(intOne, intTwo) {
    let sum = 0;




    if (intOne < 0 || intTwo < 0 || !Number.isInteger(intOne) || !Number.isInteger(intTwo)) 
        return "ERROR";

        

    if (intOne > intTwo){
        let temp = intOne;
        intOne = intTwo;
        intTwo = temp;
    }

    for (i = intOne; i <= intTwo; i++){
        sum += i;
    }


    return sum;
};

// Do not edit below this line
module.exports = sumAll;
