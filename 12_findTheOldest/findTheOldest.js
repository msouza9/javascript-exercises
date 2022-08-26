const findTheOldest = function(array) {  
    const ordered = array.sort((a, b) => getAge(a.yearOfBirth, a.yearOfDeath) < getAge(b.yearOfBirth, b.yearOfDeath) ? 1 : -1);

    // console.log(ordered);
    return ordered[Object.keys(ordered)[0]];
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    else 
    console.log(death - birth);
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
