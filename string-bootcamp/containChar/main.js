function repeat(text, repetitions){
    let newText = text;
    for(let i = 1; i < repetitions; i++) {
        newText += text;
    }
    return newText
}
let text = "omg";
let num = 5;
repeat(text, 3) // => "hellohellohello"

// function containChar(text, character){
//     let i=0;
//     while(i < text.length){
//         if(text[i] === character){
//             return true;
        
            
//         }
//         i++;
//     }
//     return false;
// }

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
    let text = "hello";
    let num = 3;
    repeat(text, 3) // => "hellohellohello"
    repeat("omg", 5) // => "omgomgomgomgomg"
}

main();