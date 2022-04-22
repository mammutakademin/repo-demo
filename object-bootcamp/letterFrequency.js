function letterFrequency(str) {
    result = {}
    for (let i = 0; i < str.length; i++) {
        if (result[str[i]]) {
            result[str[i]]+=1
        }else{
            result[str[i]]=1
        }

    }
    return result
}
function main() {
    let str = "adammmmaaaammmmaaaammmm"
    let x= letterFrequency(str)
}
main();