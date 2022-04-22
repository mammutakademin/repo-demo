const btn = document.querySelector("button")
const ul = document.querySelector("ul.people")

btn.addEventListener("click", () => {
  // Make request
  const request = fetch('https://randomuser.me/api?inc=gender,name,nat&results=10')
  
  request
    .then(response => response.json()) // When request resolves, convert the body to object
    .then(data => { // When body is resolved to object create elements
      for(let user of data.results){
        const li = document.createElement("li")
        li.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`
        ul.append(li)
      }
    })
    .catch(error => {
      console.log("AN ERROR OCCURED!")
      console.log(error)
    })
  
})