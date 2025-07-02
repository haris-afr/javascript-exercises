const fibonacci = function(n) {
    n = +n;
    if (n < 0){
        return "OOPS";
    }
    else if (n == 1 || n == 0){
        return n;
    }
    else{
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
