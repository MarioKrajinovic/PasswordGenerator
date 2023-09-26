const letters = ["A","B","C","D","E","F","G","H","I","J"
,"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",
"Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"
,"p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = ["~","`","!","@","#","$","%","^","&"
,"*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">"
,".","?","/"]

let firstPasswordEl = document.getElementById("first-password")
let secondPasswordEl = document.getElementById("second-password")

function generateFirstPassword(){
    let length = document.getElementById("length").value
    let checkSymbols = document.getElementById("symbols")
    let checkNumbers = document.getElementById("numbers")
    let password = ""

    if(checkNumbers.checked === true && checkSymbols.checked === true){
        let characters = []
        for(let i = 0; i < letters.length; i++){
            characters.push(letters[i])
        }
        for(let i = 0; i < numbers.length; i++){
            characters.push(numbers[i])
        }
        for(let i = 0; i < symbols.length; i++){
            characters.push(symbols[i])
        }
        for(let i = 0; i < length; i++){
            let character = Math.floor(Math.random() * characters.length)
            password += characters[character]
        }
        return password
    }
    else if(checkSymbols.checked === true){
        let characters = []
        for(let i = 0; i < letters.length; i++){
            characters.push(letters[i])
        }
        for(let i = 0; i < symbols.length; i++){
            characters.push(symbols[i])
        }
        for(let i = 0; i < length; i++){
            let character = Math.floor(Math.random() * characters.length)
            password += characters[character]
        }
        return password
    }
    else if(checkNumbers.checked === true){
        let characters = []
        for(let i = 0; i < letters.length; i++){
            characters.push(letters[i])
        }
        for(let i = 0; i < numbers.length; i++){
            characters.push(numbers[i])
        }
        for(let i = 0; i < length; i++){
            let character = Math.floor(Math.random() * characters.length)
            password += characters[character]
        }
        return password
    }
    else{
        for(let i = 0; i < length; i++){
            let character = Math.floor(Math.random() * letters.length)
            password += letters[character]
        }
        return password
    }
}
function generateSecondPassword(){
    let length = document.getElementById("length").value
    let checkSymbols = document.getElementById("symbols")
    let checkNumbers = document.getElementById("numbers")
    let password = ""

    if(checkNumbers.checked === true && checkSymbols.checked === true){
        let characters = []
        for(let i = 0; i < letters.length; i++){
            characters.push(letters[i])
        }
        for(let i = 0; i < numbers.length; i++){
            characters.push(numbers[i])
        }
        for(let i = 0; i < symbols.length; i++){
            characters.push(symbols[i])
        }
        for(let i = 0; i < length; i++){
            let character = Math.floor(Math.random() * characters.length)
            password += characters[character]
        }
        return password
    }
    else if(checkSymbols.checked === true){
        let characters = []
        for(let i = 0; i < letters.length; i++){
            characters.push(letters[i])
        }
        for(let i = 0; i < symbols.length; i++){
            characters.push(symbols[i])
        }
        for(let i = 0; i < length; i++){
            let character = Math.floor(Math.random() * characters.length)
            password += characters[character]
        }
        return password
    }
    else if(checkNumbers.checked === true){
        let characters = []
        for(let i = 0; i < letters.length; i++){
            characters.push(letters[i])
        }
        for(let i = 0; i < numbers.length; i++){
            characters.push(numbers[i])
        }
        for(let i = 0; i < length; i++){
            let character = Math.floor(Math.random() * characters.length)
            password += characters[character]
        }
        return password
    }
    else{
        for(let i = 0; i < length; i++){
            let character = Math.floor(Math.random() * letters.length)
            password += letters[character]
        }
        return password
    }
}
function generatePasswords(){
    let firstPassword = generateFirstPassword()
    let secondPassword = generateSecondPassword()

    firstPasswordEl.textContent = firstPassword
    secondPasswordEl.textContent = secondPassword
}
function copyPasswordOne(){
    var range = document.createRange()
    range.selectNode(document.getElementById("first-password"))
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)
    document.execCommand("copy")
    window.getSelection().removeAllRanges()
    firstPasswordEl.textContent = "✔"
}
function copyPasswordTwo(){
    var range = document.createRange();
    range.selectNode(document.getElementById("second-password"))
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)
    document.execCommand("copy");
    window.getSelection().removeAllRanges()
    secondPasswordEl.textContent = "✔"
}
function changeMode(){
    let mode = document.getElementById("mode")
    if(mode.checked === true){
        document.body.classList.remove("lite")
    }else{
        document.body.classList.add("lite")
    }
}