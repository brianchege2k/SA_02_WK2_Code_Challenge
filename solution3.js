//arrow function that will accept an array of numbers
const getPrimes = (numbers) => {

//declare an empty array variable for stroting the prime numbers
    const primeNumbers = [];
//helper function to check if a number is a prime number
const isPrime = (number) => {
//if the number is less than equal to one its not a prime number
    if (number <= 1) {
        return false;
    }
//if the number is divisible by 2 its not prime
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0) {
            return false;
        }
    }
    return true;
}

// Loop through the input array
    for (const number of numbers) {
//Check if the number is prime using the function and push to the primeNumbers array
        if (isPrime(number)) {
            primeNumbers.push(number);
        }
    }
//return prime numbers
    return primeNumbers;
  }
//call function with an array of choice
  console.log(getPrimes([1,2,3,4,5,6,7,8,9,10]))
