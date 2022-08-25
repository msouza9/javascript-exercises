const palindromes = function (word) {
    let backward = [];
    let scrubbed = word.replace(/[!., ]/g,"");
    let lowerScrub = scrubbed.toLowerCase();
    
    for(i=(lowerScrub.length-1); i>=0; i--){
        backward.push(lowerScrub[i]);
    }

    backward = backward.join('');

    if(backward === lowerScrub){
        return true;
    }
    else {
        console.log(backward);
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
