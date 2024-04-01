//function that accepts two numbers

function arrayGenerator(num1,num2){

    //empty array variable

    let generatedArray = []

    if (num1 <= num2){

        for(let i = num1; i <= num2; i++){

            generatedArray.push(i)

        }
    }else{
        for (let i = num1; i >= num2; i--){
            
            generatedArray.push(i)
        }
    }

    return generatedArray

}


console.log(arrayGenerator(4,7))

console.log(arrayGenerator(-4,7))