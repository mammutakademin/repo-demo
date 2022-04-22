// Skapa ett text-fält, när man skriver in en färg och trycker enter ska bodyn byta bakgrundsfärg till den färgen. Om färgen inte finns ska ett felmeddelande visas.

// Setup globals
const COLORS = ["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"]
const textField = document.querySelector("input")
const errorText = document.querySelector(".error")
const colorList = document.querySelector(".color-list")

// Register listener
textField.addEventListener("keyup", keyHandler)

function clickHandler(event){
    document.body.style.backgroundColor = event.target.innerText
}

function createList(colors){
    colorList.innerHTML = ""
    for(let color of colors){
        const li = document.createElement("li")
        colorList.append(li)
        li.innerText = color
        li.addEventListener("click", clickHandler)
    }
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

function keyHandler(event){
    const inputText = textField.value
    if(event.key === "Enter"){
        if(COLORS.includes(inputText)){
            document.body.style.backgroundColor = inputText
        }else{
            errorText.style.display = 'block'
            errorText.innerText = "Invalid color!"
        }
        colorList.innerHTML = ""
    }else{
        errorText.style.display = 'none'
        if(inputText.length == 0){
            colorList.style.display = 'none'
        }else{
            colorList.style.display = 'block'
            const matches = findMatchingColors(inputText) // const matches = COLORS.filter(color => color.includes(text))
            if(matches.length > 0){
                createList(matches)
            }else{
                errorText.innerText = "No matching colors!"
            }
        }
    }
}