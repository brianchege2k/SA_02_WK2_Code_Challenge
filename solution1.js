//function for swapping that takes a string as the parameter.
function stringSwap(string){

    //Empty finalString variable
    let finalString = ''

    //For loop for iteration

    for(let i = 0 ; i < string.length; i++){
// variable for storing the characters in the string
        const characters = string[i];
//the if condition will change to lowercase if character is uppercase
        if (characters === characters.toUpperCase()){
            finalString += characters.toLowerCase()
//lse it will change to uppercase if character is lowercase
        }else{
            finalString += characters.toUpperCase()
        }

        // function returns the swapped string
    }return finalString
}
//final output in terminal
console.log(stringSwap('The Quick Brown Fox'))