let cart;
let productList;

function saveCart(){
  const cartString = JSON.stringify(cart)
  localStorage.setItem("cart", cartString)
}

function loadCart(){
  const savedCart = localStorage.getItem("cart")
  if(savedCart){
    cart = JSON.parse(savedCart)
  }else{
    cart = [] // {name, price, amount}
  }
}

function setupInitialState(){
  productList = [
    {picname: "black.jpg", name: "Cardi Black", price: 499},
    {picname: "blue.jpg", name: "Cardi Blue", price: 499},
    {picname: "brown.jpg", name: "Cardi Brown", price: 499}
  ]
  loadCart()
}

function renderProductList(){
  const productsContainer = document.querySelector("section.products")
  for(let product of productList){
    const productElement = createProduct(product)
    productsContainer.append(productElement)
  }  
  const numItems = document.querySelector(".num-items")
  numItems.classList.add("active")
  numItems.innerText = getCartAmount()
}

function increase(li, item){
  item.amount++
  li.querySelector("p").innerText = `${item.amount}x ${item.name}`
  saveCart()
}

function decrease(li, item){
  item.amount--
  if(item.amount <= 0){    
    cart = cart.filter(i => i.name != item.name)
    li.remove()
  }else{
    li.querySelector("p").innerText = `${item.amount}x ${item.name}`
  }
  saveCart()
}

function createCartItem(item){
  const li = document.createElement("li")

  li.innerHTML = `
    <div class="controls">
      <button class="increase">+</button>
      <button class="decrease">-</button>
    </div>
    <p>${item.amount}x ${item.name}</p>
  `
  li.querySelector(".increase")
    .addEventListener("click", () => increase(li, item))

  li.querySelector(".decrease")
    .addEventListener("click", () => decrease(li, item))

  return li
}

function renderCart(){
  const cartContainer = document.querySelector(".cart")
  for(let item of cart){
    const li = createCartItem(item)
    cartContainer.append(li)
  }
}

function getCartAmount(){
  let sum = 0
  for(let item of cart){
    sum += item.amount
  }
  return sum
}

function createProduct(product){
  const productArticle = document.createElement("article")
  productArticle.classList.add("product")

  productArticle.innerHTML = `
  <img src="assets/${product.picname}" alt="cardigan" width="200px" height="300px">
    <p class="name">${product.name}</p>
    <p class="price">${product.price}:-</p>
    <button class="add-to-cart">Add to cart</button>
  `
  const addToCartBtn = productArticle.querySelector(".add-to-cart")
  addToCartBtn.addEventListener("click", () => {
    addToCart(product)
  })
  return productArticle
}

function renderNumItems(){
  const numItems = document.querySelector(".num-items")
  numItems.classList.add("active")
  numItems.innerText = getCartAmount()
}

function addToCart(product){
  // let inCart = cart.find(item => item.name == product.name)
  let inCart = null
  for(let needle of cart){
    if(product.name == needle.name){
      inCart = needle;
      break;
    }
  }

  if(inCart){
    inCart.amount++
  }else{
    const orderItem = {...product, amount: 1}
    cart.push(orderItem)
  }

  saveCart()
  renderNumItems()
}

function main(){
  if(window.location.pathname.endsWith('kundkorg.html')){
    loadCart()
    renderCart()
  }else{
    setupInitialState()
    renderProductList()
  }
}

main()
