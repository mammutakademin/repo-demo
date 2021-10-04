function minimumOfTwo(num1, num2) {
    let result;
    if(num1 < num2) {
        result = num1;
    }else {
        result = num2;
    }
    return result;
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

function minimumOfThree(num1, num2, num3) {
    let min = 0;
    if (num1 > num2) {
        min = num2;
        if (num2 > num3) {
            min = num3;
        }
    }else {
        min = num1;
    }
    return min;
}

// function sumTo(num) {
//     let sum = 0;
//     let i = 0;
//     while(i < num) {
//         i = i + 1;
//         sum = sum + i;
//     }
//     return sum;
// }

function ticketMachine(age) {
    let price = 0;
    if(age < 18) {
        price = 10;
    }else if(age < 65) {
        price = 20;
    }else {
        price = 15;
    }
    return price;
}

function sumTo(num) {
    let sum = 0;
    for(let i = 0; i <= num; i = i + 1) {
        sum = sum + i;
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

function main() {
    let min1 = minimumOfTwo(8, 2);
    let min2 = minimumOfTwo(9, 6);
    // let min3 = minOfThree(2, 5, 9);
    let price1 = ticketMachine(4);
    let price2 = ticketMachine(48);
    let price3 = ticketMachine(99);
    let sum1 = sumTo(5);
    let sum2 = sumTo(6);
    let output1 = fibonacci(10);
    let output2 = fibonacci(3);
    let output3 = fibonacci(1);   
}

main();