function repeat(text, repetitions) {
    let textstring="";
    for(let i=0; i<repetitions; i=i+1){
        textstring=textstring+text;
    }
    return textstring;
}
function main(){
    repeat("hello", 15);
}