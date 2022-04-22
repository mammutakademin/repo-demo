function validateUsername(name){
    let allowedChar = "abcdefghijklmnopqrstuvwxyzåäöABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ1234567890.-";
    let j = "";
    // if(name.length > 3 && name.length < 30) {
    //     return true;
    // }else {
    //     return false;
    // }

    for(let i = 0; i < name.length && allowedChar.includes(name[i]); i++){
        j+=name[i];
    }
    return j;
            
    // if(name[0] == "." || name[0] == "-" || !isNaN(Number(name[0]))){
    //     return false;
    // }else {
    //     return name[0];
    // }
}


function main() {
    // validateUsername("kalle") // => true
    // validateUsername("olof-bengtsson") // => true
    // validateUsername("olof--bengtsson") // => false
    // validateUsername("eva.svensson") // => true
    // validateUsername("eva..svensson") // => false
    // validateUsername("1337hacker") // => false
    // validateUsername("e1337") // => true
    // validateUsername(".hacker") // => false
    // validateUsername("-hacker") // => false
    // validateUsername("torkel-") // => false
    validateUsername("p&%#?") // => false
    validateUsername("&%#?") // => false
}

main();