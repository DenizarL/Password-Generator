const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i",
"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordShelf = document.getElementById("password-shelf")
let password2Shelf = document.getElementById("password2-shelf")

function getRandomPassword(){
    let password = ""
    for (let i=0; i<15; i++){
    let randomPass = Math.floor(Math.random()* characters.length)
    password += characters[randomPass]

    }
    return password
    
}

function generatePassword(){
    passwordShelf.textContent = ""
    password2Shelf.textContent = ""
    let firstPassword = getRandomPassword()
    let secondPassword = getRandomPassword() 
    passwordShelf.textContent += firstPassword
    password2Shelf.textContent += secondPassword
}






