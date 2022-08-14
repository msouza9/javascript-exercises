const ftoc = function(temp) {
  let celcius = (temp - 32 ) * .5556;
  rounded = Math.round(celcius * 10) / 10;

  return rounded;
};

const ctof = function(temp) {
  let farenheit = (temp * 1.8) + 32;
  rounded = Math.round(farenheit * 10) / 10;

  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
