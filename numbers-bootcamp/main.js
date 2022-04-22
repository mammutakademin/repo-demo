function minimumOfTwo(num1, num2) {
    let min;
    if(num1 < num2) {
        min = num1;
    }else {
        min = num2;
    }
    return min;
}

// function minOfThree(num1, num2, num3) {
//     let result;
//     let min = minimumOfTwo(num1, num2);
//     if (min > num3) {
//         result = num3;
//     }else {
//         result = min;
//     }
//     return result
// }

// function minimumOfThree(num1, num2, num3) {
//     let min = num1;
//     if (num2 < min) {
//         min = num2;
//     }
//     if (num3 < min) {
//         min = num3;
//     }
//     return min;
// }

// function maximumOfFour(num1, num2, num3, num4){
//     let max;
//     if(num1 > num2) {
//         max = num1;
//     }else {
//         max = num2;
//     }
//     if(num3 > max) {
//         max = num3;
//     }
//     if(num4 > max) {
//         max = num4;
//     }
//     return max;
// }

// function maximumOfFour(num1, num2, num3, num4){
//     let max = num1;
//     if(num2 > max){
//         max = num2;
//     }
//     if(num3 > max){
//         max = num3;
//     }
//     if(num4 > max){
//         max = num4;
//     }
//     return max;
// }

// function ticketMachine(age){
//     let price;
//     if(age < 18){
//       price = 10;
//     }else if(age < 65){
//       price = 20;
//     }else{
//       price = 15;
//     }
//     return price;
//   }
              
// function sumTo(num) {
//     let sum = 0;
//     let i = 0;
//     while(i < num) {
//         i = i + 1;
//         sum = sum + i;
//     }
//     return sum;
// }

// function sumTo(num) {
//     let sum = 0;
//     for(let i = 0; i <= num; i+=1) {
//         sum += i;
//     }
//     return sum;
// }

function factorial(num){
    let sum = 1;
    for(let i = 1; i <= num; i+=1){
      sum *= i;
    }
    return sum;
  }  

/*
* Factorial Bonus with helper function
*/
function multiply(factor1, factor2){
    let product = 0;
    for(let i = 0; i < factor1; i+=1){
      product += factor2;
    }
    return product;
  }
  function factorialBonus1(num){
    let sum = 1;
    for(let i = 1; i <= num; i+=1){
      sum = multiply(sum, i);
    }
    return sum;
  }
  
  /*
  * Factorial Bonus with nested loop
  */
  function factorialBonus2(num){
    let sum = 1;
    for(let i = 1; i <= num; i+=1){
      let product = 0;
      for(let j = 0; j < i; j+=1){
        product += sum;
      }
      sum = product;
    }
    return sum;
  }

function fibonacci(input) {
    let a = 1;
    let b = 0;
    let output = 0;
    let i = 0;
    while(i < input) {
        output = a + b;
        a = b;
        b = output;
        i = i + 1;
    }
    return output;
}

function fib(n) {
    if(n == 1) { return 1 }
    if(n == 2) { return 1 }
    let res = fib(n - 2) + fib(n - 1)
    return res
}

/*
* Fibonacci med mellanlagring
*/
function fibonacci(num){
    let current = 1, previous = 1;
    for(let i = 2; i < num; i += 1){
      let temp = current;
      current = current + previous;
      previous = temp;
    }
    return current;
  }
  /*
  * Fibonacci med matematiktrolleri
  */
  function fibonacci2(num){
    let current = 1, previous = 1;
    for(let i = 2; i < num; i += 1){ 
      current = current + previous;
      previous = current - previous;
    }
    return current;
  }
  /*
  * Fibonacci med rekursion
  */
  function fibonacciRecursive(num){
    if(num == 1 || num == 2){ return 1 }
    return fibonacciRecursive(num-2) + fibonacciRecursive(num-1)
  }

  function collatz(num){
    let iterations = 0;
    while(num != 1){
      if(num%2 == 0){
        num /= 2;
      }else{
        num = num * 3 + 1;
      }
      iterations += 1;
    }
    return iterations;
  }

function main() {
    let min1 = minimumOfTwo(8, 2);
    let min2 = minimumOfTwo(9, 6);
    // let min3 = minOfThree(2, 5, 9);
    let max4 = maximumOfFour(12, 72, 9, 4);
    let price1 = ticketMachine(4);
    let price2 = ticketMachine(48);
    let price3 = ticketMachine(99);
    let sum1 = sumTo(5);
    let sum2 = sumTo(6);
    let output1 = fibonacci(10);
    let output2 = fibonacci(3);
    let output3 = fibonacci(1);
    let result = fib(8);  
}

main();






// Exempel - Fibonacci

  // lista : 1 1 2 3 5 8 13 21 ...

  function fibonacci (input) {
    if (input <= 2) return 1;
    return fibonacci (input-1) + fibonacci (input-2);
}

function main () {
    let input = 8;
    let fibonacciTal = fibonacci (input);
    console.log  (fibonacciTal);
}

// Anropa main

main();