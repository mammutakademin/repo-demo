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

// function main(){
//     let wifi = containChar("superman", "y");
// }
// main();

function indexOfChar(text, character){
    for(let i=0; i<text.length; i++){
        if(text[i]===character){
            return i;
        }
    }
    return -1;
}

function main(){
    let result = indexOfChar("hey", "x");
}
main();
