const sumAll = function(num1, num2) {
    const sumList = [];
    let sum = 0;
    let bNum;
    let tNum;

    if(num1 !== parseInt(num1) || num2 !== parseInt(num2)){
        return 'ERROR';
    }
    else if(num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    else if(num1 > num2){
       tNum = num1;
       bNum = num2; 
    }
    else if (num1 < num2){
        tNum = num2;
        bNum = num1;
    }
    else {
        return 'ERROR';
    }

    for (let i = bNum; i <= tNum; i++) {
        sumList.push(i);
    }

    sumList.forEach((item) => {
        sum += item;
    });
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
