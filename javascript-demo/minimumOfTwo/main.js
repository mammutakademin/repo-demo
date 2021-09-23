function minimumOfTwo(num1, num2) {
    let result;
    if(num1 < num2) {
        result = num1;
    }else {
        result = num2;
    }
    return result;
}

function main() {
    let min1 = minimumOfTwo(8, 2);
    let min2 = minimumOfTwo(9, 6);
}

main();