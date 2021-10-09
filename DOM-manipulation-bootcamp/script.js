// Code here!

// uppgift 1 

let firstHTre = document.querySelector("h3");
firstHTre.innerHTML = "Potato";

// uppgift 2

let firstLink = document.querySelector("a");
firstLink.innerHTML = "Start";

// uppgift 3
let tredjeLink = document.querySelector("a:nth-of-type(3)");
tredjeLink.innerHTML = "Mail Us"

// uppgift 4
let sinusHoodiepara = document.querySelector(".art-2 p");
sinusHoodiepara.innerHTML = "Abracadabra bohemian rhapsody"

// uppgift 5
let btn = document.querySelector("button");
btn.style.background = "blue";

// uppgift 6 
let figureClr = document.querySelector(".art-3 figure");
figureClr.style.background = "green";

// uppgift 7
let adress = document.querySelector("section article:nth-of-type(2) p");
adress.innerHTML = `Flipping boars <br>Karl cuttas väg 3<br>2001<br>Säljing`;

// uppgift 8
let allPs = document.querySelectorAll("p");
for(let i = 0; i < allPs.length; i++){
	allPs[i].style.color = "green";
}

// uppgift 9
let allBtn = document.querySelectorAll("button");
for(let i = 0; i < allBtn.length; i++) {
    allBtn[i].innerHTML = "add to cart";
}

// uppgift 10
firstLink.classList.add("active");

// uppgift 11
let removeLogo = document.querySelector("img");
removeLogo.classList.remove("logo")

// uppgift 12
let addToMenu = document.createElement("a");
addToMenu.innerHTML = `Hejhopp`;
addToMenu.setAttribute("href", "#");
document.body.querySelector("nav").append(addToMenu);

// uppgift 13

let productsSection = document.body.querySelector("main");
productsSection.insertAdjacentHTML('beforeend', `<article class="art-4">
<figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
<h2>Sinus Hoodie</h2>
<h3>Forrest</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus enim!</p>
<button>buy</button>
</article>`);




// `<article class="art-4">` + 
// `	<figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure> ` + 
// `	<h2>Sinus Hoodie</h2> ` + 
// `	<h3>Forrest</h3> ` + 
// `	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus enim!</p> ` + 
// `	<button>buy</button> ` + 
// `</article>
// `
