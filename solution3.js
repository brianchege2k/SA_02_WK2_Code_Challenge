const getPrimes = (limit) => {
    const primes = [];
    const isPrime = (number) => {
      for (let factor = 2; factor < number; factor++) {
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
  
  console.log(getPrimes(10));