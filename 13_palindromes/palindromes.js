const palindromes = function (givenString) {
    const punctuationArr = [" ", "!", ".", ",", "?"];
    givenString = givenString.split("");
    for (i = 0; i < givenString.length; i++){
        if (punctuationArr.includes(givenString[i])){  
            givenString.splice(i, 1);
            i--;
            continue;
        }
    }
    givenString = givenString.map(char => char.toLowerCase());
    const copy = [...givenString];
    givenString.reverse();
    return areArraysEqual(givenString, copy);
    
};

function areArraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false; // Arrays of different lengths cannot be equal
        }
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false; // Elements at the same index are not equal
            }
        }
        return true; // All elements are equal
}

console.log(palindromes("Animal loots foliated detail of stool lamina."));

// Do not edit below this line
module.exports = palindromes;
