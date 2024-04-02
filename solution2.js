//function that accepts two numbers
function arrayGenerator(num1,num2){

//empty array variable
    let generatedArray = []
//check if first number is less than or equal to second number
    if (num1 <= num2){
//iteration  from num1 to num2 and pushing a value inside the empty array variable
        for(let i = num1; i <= num2; i++){

            generatedArray.push(i)

        }
    }else{
//second iteration in reverse order and value inside the array variable
        for (let i = num1; i >= num2; i--){
            
            generatedArray.push(i)
        }
    }
//function returns generated array
    return generatedArray

}

//output in the terminal
console.log(arrayGenerator(4,7))

console.log(arrayGenerator(-4,7))