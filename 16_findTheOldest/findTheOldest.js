const findTheOldest = function(arr) {
    arr = arr.sort(function(a, b) {
        a = a.yearOfDeath ? a.yearOfDeath - a.yearOfBirth : 2025 - a.yearOfBirth;
        b = b.yearOfDeath ? b.yearOfDeath - b.yearOfBirth : 2025 - b.yearOfBirth;
        return b - a;
    })
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
