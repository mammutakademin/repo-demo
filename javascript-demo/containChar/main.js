function containChar(text, character){
    while(i < text.length()){
        if(text[i] === character){
            result=true;
        }else{
            result=false;
        }
        i++;
    }
    return result;
}
function main(){
    containChar("hello world", "d");
}
main();