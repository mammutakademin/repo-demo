let buttons = document.querySelectorAll("button");
let cartCounter = document.querySelector(".cart-counter");
let cardContainer = document.querySelector(".card-container");
let local = localStorage.getItem("amount");


let leftBtn = document.querySelector(".leftBtn");
let middleBtn = document.querySelector(".middleBtn");
let rightBtn = document.querySelector(".rightBtn");



const AllProducts = [
  { name: "black cardigan", price: 790, amount: 1, image: "black.jpg" },
  { name: "blue cardigan", price: 790, amount: 1, image: "blue.jpg" },
  { name: "brown cardigan", price: 790, amount: 1, image: "brown.jpg" },
];

let AmountProductsInCart = 0;
let ProductsInCart = [];


function setCounter() {
  if (local == null) {
    cartCounter.innerText = 0;
  } else {
    AmountProductsInCart = local;
    cartCounter.innerText = local;
  }
}
setCounter();

function setOrder() {
  let localOrder = localStorage.getItem("ProductsInCart");

  if (localOrder == null) {
    console.log("den är tom")

  } else {
     ProductsInCart = localOrder.split(',')
    // orders = JSON.parse(localOrder)
    console.log(ProductsInCart)
  }
}
 setOrder();


function createProducts() {
  for (let Product of AllProducts) {
    let div = document.createElement("div");
    div.innerHTML = `
     <img  src="${Product.image}">
     <p>${Product.name}</p>
     <p>${Product.price}</p>
     <button class="leftBtn">Add to cart</button>
`;
    cardContainer.append(div);
    div.querySelector("button").addEventListener("click", () => {
      ProductsInCart.push(Product.name);
      addToCart();
      // orderHandler(order, orders);
    });
  }
}

// function orderHandler(order, orders) {
//   if (orders.includes(order)) {
//     // orders.amount++;
//     console.log("hej");
//   } else {
//     orders.push(order);
//   }
// }

createProducts();

function addToCart() {
  AmountProductsInCart++;
  cartCounter.innerText = AmountProductsInCart;
  localStorage.setItem("amount", AmountProductsInCart);
  localStorage.setItem("ProductsInCart",ProductsInCart);
 
}