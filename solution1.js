//function for swapping that takes a string as the parameter.
function stringSwap(string){

    //Empty finalString variable
    let finalString = ''

    //For loop for iteration

    for(let i = 0 ; i < string.length; i++){
// variable for storing the characters in the string
        const characters = string[i];
//change to lowercase if character is uppercase
        if (characters === characters.toUpperCase()){
            finalString += characters.toLowerCase()
//change to uppercase if character is lowercase
        }else{
            finalString += characters.toUpperCase()
        }

        //returns the swapped string
    }return finalString
}
//final output
console.log(stringSwap('The Quick Brown Fox'))