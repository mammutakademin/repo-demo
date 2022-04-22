// Button Event
// Lägg till en knapp och se till att när man klickar på knappen så byts texten på knappen.

/* let btn = document.querySelector("button");
btn.addEventListener("click", test);

function test(){
    btn.innerText = "ny text";
}
 */

// Click Counter
// Lägg till en knapp och se till att när man klickar på knappen så visas en räknare hur många gånger man har klickat på den.

/* let i = 0
let btn = document.querySelector("button");
btn.addEventListener("click", countClicks);

function countClicks(){
    i++;
    btn.innerText = `clicked ${i} times`;
} */

// Input Duplication
// Lägg till ett text-fält och se till att varje gång man skriver i fältet så visas samma innehåll i en annan paragraf.

/* const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("change", upDateValue);

function upDateValue(e) {
    log.textContent = e.target.value;
} */

// Countdown timer
// Skapa en sekundräknare som tickar nedåt tills den nått noll och visar hur många sekunder det är kvar. När den har räknat klart, visa ett meddelande.

    /* let timeleft = 10;
    let downloadTimer = setInterval(function(){
        timeleft--;
        document.getElementById("countdowntimer").textContent = timeleft;
        if(timeleft <= 0) {
            clearInterval(downloadTimer);
        }
        // Show a message after the timer stops
        // let newP = document.createElement("p");
        // p.textContent = "Go!";
    },1000); */




// let colors = ['hotpink', 'blue', 'red'];

// document.querySelector('.color').addEventListener('keyup', (e) => {

//     // check if color in colors exists

//     let input = e.target.value; // input value
    
//     let found = colors.filter((color) => { // Filtera fram alla färger som innehåller input-värdet
//         return color.includes(input);
//     })

//     // Visa denna förslags-arrayen i UI
//     console.log(found)

//     // on enter, do something
//     if(e.code === 'Enter') {
//         // search
//     }

// })

