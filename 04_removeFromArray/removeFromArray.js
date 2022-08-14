const removeFromArray = function(...valuesToCheck) {    
    const oldArray = valuesToCheck[0]; /**copies over original array at [0] element */
    const newArray = []; /**this will be what we return */
    
    oldArray.forEach((item) => { /**this is a shorthand "for" loop to go thru each item in the orig array */
        if(!valuesToCheck.includes(item)){ /**checks if orig array elements are in removal arguments passed into function */
            newArray.push(item); /**creates new array without excluded parameters  */
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
