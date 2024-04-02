//arrow function that generated prime numbers upto a certain limit
const getPrimes = ([]) => {
//declare an empty array variable
    const primes = [];
//helper function to check if a number is a prime number
    const isPrime = (number) => {
//loop therough from 2 to -1
      for (let factor = 2; factor < number; factor++) {
//check if 
        if (number % factor === 0) {
          return false;
        }
      }
      return true;
    };
  
    for (let number = 2; number <= limit; number++) 
      if (isPrime(number)) 
        primes.push(number);
      
    return primes;
  };
//call function with a value 10
  console.log(getPrimes([1,2,3,4,5,6,7,8,9,10]));