const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
//generate a password when the user clicks the button,
// get the id of the button
function generatePassword(length) {
    let password = "";
     for(let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  } 
 return password;
}
let passwordBtn = document.getElementById("password-btn");
let btn1El = document.getElementById("btn1");
let btn2El = document.getElementById("btn2");

passwordBtn.addEventListener("click", ()=>{
    const password1 = generatePassword(12);
    const password2 = generatePassword(12);

    btn1El.textContent = password1;
    btn2El.textContent = password2;
});


let clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", () => {
    btn1El.textContent = "";
    btn2El.textContent = "";
})

