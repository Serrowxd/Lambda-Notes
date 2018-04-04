function primeList(start, end) {
    // create an array to hold the range of nums
    const primes = [];
    // create an upperlimit
    const upperLimit = Math.sqrt(end);
    // create an output to return
    const output = [];
    
    // fill an array with true
    for (let i = 0; i <= end; i++) {
        primes.push(true);
    }

    // create a for loop to eliminate the multiples
    for (let i = 2; i <= upperLimit; i++) {
        if (primes[i]) {
            for (let j = i * i; j <= end; j += i) {
                primes[j] = false;
            }
        }        
    }

    // create a loop to push the primes into output
    for (let i = 2; i <= end; i++) {
        if (primes[i] && i >= start) output.push(i);
    }
    return output;
}

primeList(10, 100);

// Chris's Solution

function primeList(start, end) {
    let primeArray = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) primeArray.push(i);
    }

    function isPrime(num) {
        if (num < 2) return false;
        for (let x = 2; x < num; x++) {
        if (num % x === 0) return false;
        }
        return true;
    }
    return primeArray;
}

primeList(10, 100);

// AJ's Solution