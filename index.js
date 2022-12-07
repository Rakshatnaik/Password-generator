const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e",
    "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
    "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!",
    "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",",
    "|", ":", ";", "<", ">", ".", "?", "/"];
let passcode1 = ""
let passcode2 = ""

let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")

document.querySelector(".btn1").addEventListener("click", generatePassword)


function generatePassword() {
    for (let i = 0; i < 16; i++) {
        let random1 = Math.floor(Math.random() * characters.length) + 1
        let random2 = Math.floor(Math.random() * characters.length) + 1
        passcode1 += characters[random1]
        passcode2 += characters[random2]
    }
    password1.textContent = passcode1
    password2.textContent = passcode2
    passcode1 = ""
    passcode2 = ""
}