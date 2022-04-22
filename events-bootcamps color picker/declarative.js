// Setup globals
const COLORS = ["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"]
const textField = document.querySelector("input")
const errorText = document.querySelector(".error")
const colorList = document.querySelector(".color-list")

// Register listener
textField.addEventListener("keyup", inputHandler)

function setColor(color){
    // textField.value = event.target.innerText
    // colorList.style.display = 'none'
    document.body.style.backgroundColor = color
}

function clearList(){
    colorList.innerHTML = ""
}

function showList(){
    colorList.style.display = 'block'
}

function hideList(){
    colorList.style.display = 'none'
}

function showError(errorMessage){
    errorText.style.display = 'block'
    errorText.innerText = errorMessage
}

function hideError(){
    errorText.style.display = 'none'
}

function findMatchingColors(partialText){
    let matches = []
    for(let color of COLORS){
        if(color.includes(partialText)){
            matches.push(color)
        }
    }
    return matches
}

function createListItem(color){
    const li = document.createElement("li")
    li.innerText = color
    li.addEventListener("click", () => setColor(color))
    return li
}

function createList(colors){
    clearList()
    for(let color of colors){
        const li = createListItem(color)
        colorList.append(li)
    }
}

function inputHandler(event){
    const inputText = textField.value

    if(event.key === "Enter"){
        if(COLORS.includes(inputText)){
            setColor(inputText)
        }else{
            showError('Invalid color!')
        }
    }else{
        hideError()
        if(inputText){
            showList()
            const matches = findMatchingColors(inputText) // const matches = COLORS.filter(color => color.includes(text))
            if(matches.length){
                createList(matches)
            }else{
                clearList()
                showError('No matching colors!')
            }
        }else{
            hideList()
        }
    }
}