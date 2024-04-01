//function for swapping that takes a string as the parameter.
function stringSwap(string){

    //Empty finalString variable
    let finalString = ''

    //For loop for iteration

    for(let i = 0 ; i < string.length; i++){

        const char = string[i];

        if (char === char.toUpperCase()){
            finalString += char.toLowerCase()

        }else{
            finalString += char.toUpperCase()
        }

        //returns the swapped string
    }return finalString
}
//final output
console.log(stringSwap('The Quick Brown Fox'))