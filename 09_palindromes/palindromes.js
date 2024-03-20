const palindromes = function (inputString) {
    let lowerCase = inputString.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
    let removedSpaces = lowerCase
        .split("")
        .reverse()
        .join("");
    return lowerCase == removedSpaces;
};

// Do not edit below this line
module.exports = palindromes;


// 1: normalise inputs to be lowercase                  | .toLowerCase()
// 2: Split input into array of substrings              | .split()
// 3: Reverse array                                     | .reverse()
// 4: Join the array back together without spaces       | .join()
// 5: normalise inputs to have no special characters    | .replaceAll("[-+.^:,]","")
// 6: reverse input in a new variable                   | .reverse()
// 7: compare input and new variable                    | if(input === reversed)