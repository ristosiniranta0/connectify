/* 
  Filename: complexCode.js
  Description: This code demonstrates a complex and sophisticated JavaScript program that calculates Fibonacci sequence, finds prime numbers, and performs other mathematical operations.
*/

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Function to generate Fibonacci sequence up to n terms
function fibonacci(n) {
  let sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

// Example usage of the functions
let inputNumber = 15;

console.log(`Fibonacci sequence up to ${inputNumber} terms:`);
let fibonacciSequence = fibonacci(inputNumber);
console.log(fibonacciSequence.join(', '));

console.log(`Prime numbers up to ${inputNumber}:`);
for (let i = 2; i <= inputNumber; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

// Additional mathematical operations

console.log(`Square root of ${inputNumber}: ${Math.sqrt(inputNumber)}`);
console.log(`Cube root of ${inputNumber}: ${Math.cbrt(inputNumber)}`);
console.log(`Square of ${inputNumber}: ${Math.pow(inputNumber, 2)}`);
console.log(`Cube of ${inputNumber}: ${Math.pow(inputNumber, 3)}`);
console.log(`Square root of the sum of squares from 1 to ${inputNumber}: ${Math.hypot(...Array.from({length: inputNumber}, (_, i) => i+1))}`);

// More complex calculations...

console.log(`Factorial of ${inputNumber}: ${factorial(inputNumber)}`); // Assume a custom implementation of the factorial function

console.log(`Sine of ${inputNumber} degrees: ${Math.sin(toRadians(inputNumber))}`); // Assume a custom implementation of converting degrees to radians

console.log(`Exponential function e^${inputNumber}: ${Math.exp(inputNumber)}`);

// ...and many more complex operations

// Function to convert degrees to radians
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

/* 
  More code...
*/

// End of complexCode.js