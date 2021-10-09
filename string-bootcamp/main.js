// function repeat(text, repetitions){
//     let newText = text;
//     for(let i = 1; i < repetitions; i++) {
//         newText += text;
//     }
//     return newText
// }

// function repeat(text, repetitions) {
//     let textstring="";
//     for(let i = 0; i < repetitions; i = i + 1){
//         textstring += text;
//     }
//     return textstring;
// }

// function containsChar(text, character){
//     let i=0;
//     while(i < text.length){
//         if(text[i] === character){
//             return true;
//         }
//         i++;
//     }
//     return false;
// }

// function indexOfChar(text, character){
//     let i = 0;
//     let result = -1;
//     while(i < text.length && result == -1){
//         if(text[i] === character){
//             result = i;
//         }
//         i++;
//     }
//     return result;
// }

// function startsWith(text, character){
//     let result;
//     if(text[0] == character) {
//         result = true;
//     }else {
//         result = false;
//     }
//     return result;
// }

// function endsWith(text, character){
//     let result;
//     if(character == text[text.length - 1]) {
//         result = true;
//     }else {
//         result = false;
//     }
//     return result;
//   }

// function reverse(text) {
//     let revText = "";
//     for(let i = text.length - 1; i >= 0; i--) {
//         revText += text[i];
//     }
//     return revText;
//   }

//   function removeChar(text, char){
//     let newText = "";
//     let i = 0;
//     while(i < text.length) {
//         if(text[i] != char) {
//             newWord += text[i];
//             i++;
//         }else {
//             i++;
//         }
//     }
//     return newWord;
//   }

// function replaceChar(text, source, dest){
//     let replacedText = "";
//     let i = 0;
//     while(i < text.length) {
//         if(text[i] != source) {
//             replacedWord += text[i];
//         }else {
//             replacedWord += dest;
//         }
//         i++;
//     }
//     return replacedWord;
// }

function substring(text, start, stop){
    let substringText = "";
    let i = start;
    while(i < stop ) {
        substringText =+ text[i];
    }
    return substringText;
}

// function containsAnywhere(str, otherString){
//     let j = 0;
//     for(let i = 0; i < str.length){
//         if(str[i] == otherString[j]){
//             i += 1;
//             j += 1;
//         }else {
//             i += 1;
//         }
//     }
//     if(j == otherString.length){
//         return true;
//     }else {
//         return false;
//     }
// }

// function contains(str, otherString){
//     let len = otherString.length;
//     for(let i = 0; i < str.length; i += 1){
//         let t=substring(str, i, len - 1 + i);
//         if(t == otherString){
//             return true;
//         }
//     }
//     return false;
// }

// function main(){
//     let wifi = containChar("superman", "y");
// }
// main();

// function indexOfChar(text, character){
//     for(let i=0; i<text.length; i++){
//         if(text[i]===character){
//             return i;
//         }
//     }
//     return -1;
// }

// function main(){
//     let result = indexOfChar("hey", "x");
// }
// main();

// function substring(text, start, stop){
//     let out = "";
//     for(let i = start; i <= stop; i++){
//         out += text[i];
//     }
//     return out;
// }

// function remove(text, chars){
//     let out = "";
//     let i = 0;
//     let len = chars.length - 1;
//     while(i < text.length){
//         let sub = substring(text, i ,i + len);
//         if(sub == chars){
//             i += text[i]
//         }
//     }
// }

function main(){
    // let text = "hello";
    // let num = 3;
    // repeat(text, 3) // => "hellohellohello"
    // repeat("omg", 5) // => "omgomgomgomgomg"

    // let str = "Hello world"
    // let char = "o"
    // containsChar(str, char) // => true
    // containsChar(str, "x") // => false

    // let str = "Hello world"
    // let char = "o"
    // indexOfChar(str, char) // => 4
    // indexOfChar(str, "x") // => -1

    // let str = "Hello";
    // let char = "H";
    // startsWith(str, char); // => true
    // startsWith(str, "X"); // => false

    // let str = "Hello";
    // let char = "o";
    // endsWith(str, char); // => true
    // endsWith(str, "X"); // => false

    // let str = "Hello world"
    // reverse(str) // => "dlrow olleH"
    // reverse("Sponge-Bob") // =>  "boB-egnopS"

    // let str = "Hello world"
    // let char = "o"
    // removeChar(str, char) // => "Hell wrld"
    // removeChar(str, " ") // =>  "Helloworld"

    // let str = "Hello world"
    // let char1 = "o"
    // let char2 = "y"
    // replaceChar(str, char1, char2) // => "Helly wyrld"
    // replaceChar(str, " ", "-") // =>  "Hello-world"

    let str = "Hello world"
    let start = 1
    let stop = 4
    substring(str, start, stop) // "ello"
    substring(str, 0, 3) // Hell
}

main();