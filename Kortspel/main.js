let suits = ["&diams;", "&spades;", "&hearts;","&clubs;"]
let num =["1","2","3","4","5","6","7","8","9","10","11","Q","K"]

let icons = document.querySelectorAll(".heart p");
let cardNum = document.querySelectorAll("span");
let lägre = document.querySelector("footer .lägre");
let lika = document.querySelector("footer .lika");
let högre = document.querySelector("footer .högre");
let score = document.querySelector("header .score");
let tries = document.querySelector("header .tries");
let currentValue;
let counter =0;
let triesCounter =3;
högre.addEventListener('click', högreFunction);
lika.addEventListener("click",likaFunction);
lägre.addEventListener("click", lägreFunction);


 // VÄLJER EN RANDOM ICON
function randomFunctionSuits (){
let randomSuits =suits[Math.floor(Math.random()*suits.length)];

for(let number of icons){
    number.innerHTML=randomSuits;
}
return randomSuits
}
randomFunctionSuits()


// VÄLJER ETT RANDOM NUMBER

function randomFunctionNumber(){
    let randomNum =num[Math.floor(Math.random()*num.length)];
    cardNum.forEach(function(e){
     e.innerHTML=randomNum;
    })
    return randomNum
   
}
let getNum= randomFunctionNumber()



// ON CLICK..



function högreFunction (){

    currentValue= randomFunctionNumber()
    randomFunctionSuits()
  

    console.log("currentValue" + currentValue)
    console.log("getNum" + getNum)

if(triesCounter != 0){
    if( currentValue > getNum){

        counter++;
        score.innerText= counter;
         console.log("counter" +counter)
         console.log("jaaa" +currentValue)
     }else{
        
        triesCounter--
        tries.innerText = triesCounter;
        console.log("nee") 
     }

}else{
    alert("GAME OVER")
}

   
     getNum =currentValue

}



// ON CLICK..


 function likaFunction (){

    
    currentValue= randomFunctionNumber()
    randomFunctionSuits()
  

    console.log("currentValue" + currentValue)
    console.log("getNum" + getNum)

    if(triesCounter != 0){

        if( getNum === currentValue){
            counter++;
            score.innerText= counter;
            console.log("counter" +counter)
             console.log("jaaa" +currentValue)
         }else{
            triesCounter--
            tries.innerText = triesCounter;
            console.log("nee") 
         }
         

    }else{
        alert("GAME OVER")
    }

    getNum =currentValue
    
 }

// ON CLICK..



function lägreFunction (){

       randomFunctionSuits()
       currentValue= randomFunctionNumber()
       
    
        console.log("currentValue" + currentValue)
        console.log("getNum" + getNum)

        if(triesCounter != 0){

            if(currentValue < getNum){
                counter++;
                score.innerText= counter;
                console.log("counter" +counter)
                console.log("jaaaa")
                 
            }else{
                triesCounter--
                tries.innerText = triesCounter;
                console.log("neee")
            }
    

        }else{
            alert("GAME OVER")
        }

       
        getNum =currentValue
}






// FLÖDE..


// function game (){
//     // om randomsuits & random number är == efter click
//     random suits && random number

//     om rätt +1 poäng ELSE -1 försök.

//     if(randomSuits && randomNum === )



// }