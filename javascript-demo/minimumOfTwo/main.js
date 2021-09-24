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

function main() {
    let min1 = minimumOfTwo(8, 2);
    let min2 = minimumOfTwo(9, 6);
    let min3 = minOfThree(9, 5, 2);
}

main();