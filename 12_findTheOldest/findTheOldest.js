const findTheOldest = function (array) {
    return array.reduce((oldPerson, currPerson) => {
        const oldAge = getAge(oldPerson.yearOfBirth, oldPerson.yearOfDeath);
        const youngAge = getAge(currPerson.yearOfBirth, currPerson.yearOfDeath);
        return oldAge < youngAge ? currPerson : oldPerson;
    });
};

const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
