// function containsElement(arr, element) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] == element) {
//             return true
//         }
//     }
//     return false
// }

// function containsElement(arr, element){
//     for(let el of arr){
//       if(el == element){
//         return true
//       }
//     }
//     return false
//   }
  
// function main() {
//     let arr = [1, 7, 1, 0, 5]
//     let element = 8
//     let result = containsElement(arr, element)
// }
// main()

/*function indexOfElement(arr, element) {
    let output = -1
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == element) {
            return i
        }
    }
    return output
}

function indexOfElement(arr, element){
  for(let i=0; i < arr.length; i++){
    if( arr[i] == element){
      return i
    }
  }
  return -1
}

function main() {
    let arr = [1, 7, 1, 0, 5]
    let element = 8
    let result = indexOfElement(arr, element)
}
main()*/

/*function min(arr) {
    let minimum = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (minimum > arr[i]) {
            minimum = arr[i]
        }
    }
    return minimum
}

function min(numbers){
  let minimum = numbers[0]
  for(let i = 1; i < numbers.length; i++){
    if(numbers[i] < minimum){
      minimum = numbers[i]
    }
  }
  return minimum
}

function main() {
    let arr = [1, 7, 1, 0, 5, ]
    let result = min(arr)
}
main()*/

/*function max(arr) {
    let maximum = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (maximum < arr[i]) {
            maximum = arr[i]
        }
    }
    return maximum
}

function max(numbers){
  let maximum = numbers[0]
  for(let i = 1; i < numbers.length; i++){
    if(numbers[i] > maximum){
      maximum = numbers[i]
    }
  }
  return maximum
}

function main() {
    let arr = [1, 7, 1, 0, 5]
    let result = max(arr)
}
main()*/

/*function sum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
            //if (sum > arr[i]) {
            //sum = arr[i]
        //}
    }
    return sum
}

function sum(numbers){
  let theSum = 0;
  for(let number of numbers){
    theSum += number;
  }
  return theSum;
}

function main() {
    let arr = [1, 7, 1, 0, 5, ]
    let result = sum(arr)
}
main()*/

/*function mean(arr) {
    let medel = 0
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    medel = sum / arr.length
    return medel
}

function mean(numbers){
  let theSum = sum(numbers)
  return theSum / numbers.length
}

function main() {
    let arr = [1, 7, 1, 0, 5]
    let result = mean(arr)
}
main()*/

function remove(array, element){
    let output = []
    for(let value of array){
      if(value != element){
        output.push(value)
      }
    }
    return output
  }

  function removeAt(array, index){
    let output = []
    for(let i = 0; i < array.length; i++){
      if(i != index){
        output.push(array[i])
      }
    }
    return output
  }

/*function reverse(arr) {
    let arr1 = []
    for (let i = arr.length - 1; i >= 0; i--) {
        arr1.push(arr[i])
    }
    return arr1
}

function reverse(array){
  let output = []
  for(let i = array.length-1; i >= 0; i--){
    output.push(array[i])
  }
  return output
}

function main() {
    let arr = [1, 7, 1, 0, 5]
    let result = reverse(arr)
}
main()*/


/*function filter(arr, element) {
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            arr1.push(arr[i])
        }
    }
    return arr1
}

function filter(array, element){
  let output = []
  for(let el of array){
    if(el == element){
      output.push(el)
    }
  }
  return output
}

function main() {
    let arr = [1, 7, 1, 0, 5]
    let element = 1
    let result = filter(arr, element)
}
main()*/

/*function exclude(arr, element) {
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != element) {
            arr1.push(arr[i])
        }
    }
    return arr1
}

function exclude(array, element){
  let output = []
  for(let el of array){
    if(el != element){
      output.push(el)
    }
  }
  return output
}

function main() {
    let arr = [1, 7, 1, 0, 5]
    let element = 1
    let result = exclude(arr, element)
}
main()*/

/*
function unique(arr) {
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]
        if (elementInArray(arr, element)) {
            arr1.push(arr[i])
        }
    }

    function elementInArray(arr, element) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] == element) {
                return false
            }
        }
        return true
    }
    return arr1
}

function unique(array){
  let output = []
  for(let element of array){
    if(!containsElement(output, element)){
      output.push(element)
    }
  }
  return output
}

function main() {
    let arr = [1, 7, 1, 0, 5, 0, 5]
    let result = unique(arr)
}

main()
*/

function split(str, delimiter){
    let output = []
    let current = ""
    for(let char of str){
      if(char == delimiter){
        output.push(current)
        current = ""
      }else{
        current += char
      }
    }
    return output
  }

  
/*
// split exempel
let greeting = "hey alla studenter i den gr??a fredag"
let myNewgreeting = greeting.split(" ")

let ownSplit = function (x) {
    let array = [];
    let temp = "";
    let j = 0;

    // har loopar vi igenom varje karakt??r i v??r string x
    for (let i = 0; i < x.length; i++) {
        let el = x[i];

        // kolla om det ??r ett mellanslag - d?? skall texten innan pushas in i v??r array
        if (el === " ") {
            // pusha in textbiten till array
            array.push(temp);
            temp = " ";
        }
        // Om vi inte matchar mot ett space s?? betyder det att vi st??tt p?? en bokstav
        if (el !== " ") {
            // Och denna l??gger vi in i v??r temporara str??ng temp
            temp = temp + el;
        }
    }
}
let randomWords = "Heyho let's go";
ownSplit(randomWords);
*/

/*
// reverse str??ngar i en array
let arr = ["G??sta", "Kalle", "Olof"];
function reverseStrings(arr) {
    // skapa en tom array d??r vi skall skicka in varje omv??nda namn
    let newArr = [];
    // Loopa igenom varje namn i v??r array
    for (let i = 0; i < arr.length; i++) {
        let temp = "";
        let name = arr[i];
        // Loopa igenom varje bokstav i v??rt namn bakl??nges
        console.log(name.length);
        for (let j = name.length - 1; j > 0; j--) {
            // F??r varje bokstav l??gger vi in den i v??r tempor??ra str??ng
            temp = temp + name[j];
        }
        newArr.push(temp);
    }
}
// kalla p?? v??r funktion s?? den faktiskt k??rs
reverseStrings(arr)
*/

/*function join(array, delimiter) {
    let words = array[0];
    for (let i = 1; i < array.length; i++) {
        words =  words + delimiter + array[i];
    }
    return words;
}

function join(array, delimiter){
  let str = "";
  for(let i = 0; i < array.length; i++){
    str += element;
    if(i < array.length-1){
      str += delimiter;
    }
  }
  return str;
}

function main() {
    let arr = ["1", "2", "3"]
    // let arr = ["Kalle", "Olof", "G??sta"]
    join(arr, " ")
    // join(arr, ", ")
}

main()*/

/*
let str = "kalle,Olof,G??sta,9";
let delimeter = ",";
let temp = "";
function ownSplit(str, del) {
    let array = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === del) {
            array.push(temp);
            temp = "";
        }
        if (char !== del) {
            temp = temp + char;
        }
    }
}
ownSplit(str, delimeter);
*/

// let arr = ["Kalle", "Olof", "G??sta", "nio"];
// let delimeter = ",";

// function ownJoin(arr, delimeter) {
//     let str = "";

//     for (let i = 0; i < arr.length; i++) {

//         str = str + arr[i] + delimeter

//     }

// }
// ownJoin(arr, delimeter);