const add = function(a, b) {
  let answer = a + b;
  return answer;
};

const subtract = function(a, b) {
	let answer = a - b;
  return answer;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
}

const multiply = function(array) {
  let end = array.length;
  let product = 0;

  product = array[0] * array[1];

  for(let i=2; i<end; i++) {
    product *= array[i];
  }

  return product;
}

const power = function(base, power) {
	return exponent = base ** power;
};

const factorial = function(factor) {
  let list = [];
  let product = 0;

  if(factor == 0 || factor == 1){
    return 1;
  }  
  else {
    for(let i=1; i<=factor; i++){ //create factorial list
      list.push(i);
    }
   
    product = list[0] * list[1]; //initial product

    for(let j=2; j<factor; j++) { //product loop for remaining ints
      product *= list[j];
    }
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
