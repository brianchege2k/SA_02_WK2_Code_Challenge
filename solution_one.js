//solution one
//Function swap

function swap(string) {
    let finalstring= "";

    //for loop for iteration
    for (let i = 0; i < string.length; i++) {
        var char = string[i];
        if (char === char.toUpperCase()) {
            finalstring += char.toLowerCase();
        } else {
            finalstring += char.toUpperCase();
        }
    }
    return finalstring;
}

//output
const input = 'The Quick Brown Fox'
const output = swap(input)
console.log(output)
