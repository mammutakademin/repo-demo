function containChar(text, character){
    let i=0;
    while(i < text.length){
        if(text[i] === character){
            return true;
        
            
        }
        i++;
    }
    return false;
}

function main(){
    let res = containChar("superman", "m");
}
main();