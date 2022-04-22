const cartCounter = document.querySelector(".cart-counter");
let cartContainer = document.querySelector(".cart-container");
let cardContainer = document.querySelector(".card-container");
let amountInCart = 0;
let articles = [];
getLocalStorage();

let productList = [
  { number: "123456", name: "black cardigan", image: "black.jpg", price: 790 },
  { number: "1234567", name: "blue cardigan", image: "blue.jpg", price: 790 },
  {
    number: "12345678",
    name: "brown cardigan",
    image: "brown.jpg",
    price: 790,
  },
];
createFrontPage();

function createFrontPage() {
  productList.forEach((element) => {
    const art = document.createElement("article");
    cardContainer.append(art);

    const img = document.createElement("img");
    art.append(img);
    img.src = element.image;
    img.alt = element.name;
    img.style.height = "300px";
    img.style.width = "200px";
    // div.innerText = `${element.name} ${element.price} ${element.image}`;
    const p = document.createElement("p");
    art.append(p);

    console.log(element.name);
  });
}

function addToCart(articleNum) {
  amountInCart++;
  cartCounter.innerHTML = amountInCart;
  articles.push(articleNum);
  saveLocalStorage(articles);
}

// ******LOCALSTORAGE******
function saveLocalStorage(articles) {
  localStorage.setItem("articles", articles);
  localStorage.setItem("amount", amountInCart);
}
function getLocalStorage() {
  amountInCart = localStorage.getItem("amount");
  cartCounter.innerHTML = amountInCart;

  articles = localStorage.getItem("articles");
  //   setOrder(articles);
}

// *****SHOPPING BAG******

function setOrder(articles) {
  if (articles.length > 1) {
    cartContainer.innerHTML = `<p>hej</p>`;
  }
}