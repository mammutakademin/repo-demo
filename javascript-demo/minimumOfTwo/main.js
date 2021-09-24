function minimumOfTwo(num1, num2) {
    let result;
    if(num1 < num2) {
        result = num1;
    }else {
        result = num2;
    }
    return result;
}


function minOfThree(num1, num2, num3) {
    let result;
    let min = minimumOfTwo(num1, num2);
    if (min > num3) {
        result = num3;
    }else {
        result = min;
    }
    return result
}

function sumTo(num) {
    let sum = 0;
    let i = 0;
    while(i < num) {
        i = i + 1;
        sum = sum + i;
    }
    return sum;
}

// function sumTo(num) {
//     let sum = 0;
//     for(let i = 0; i <= num; i = i + 1) {
//         sum = sum + 1;
//     }
//     return sum;
// }

function main() {
    let min1 = minimumOfTwo(8, 2);
    let min2 = minimumOfTwo(9, 6);
    let min3 = minOfThree(9, 5, 2);
    let sum1 = sumTo(5);
    let sum2 = sumTo(8);
}

main();