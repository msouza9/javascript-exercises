const fibonacci = function(number) {
    const ratio = 1.618034

    if(number < 0) {
    return "OOPS";
    }
    else {

    let fib = ((ratio ** number) - ((1 - ratio) ** number)) / (Math.sqrt(5));
    
    return Math.round(fib);
    }

};

// Do not edit below this line
module.exports = fibonacci;
