// Variables
const startLanding = document.getElementById("start-landing")
const gameLanding = document.getElementById("game-landing")
const biNumber = document.getElementById("biNumber")
const colorSwitch = document.getElementById("colorSwitch")
const userNumber = document.getElementById("userNumber")

// Game Variables
let biNumberArray = []
let deNumber = 0
let enterActive = 0

/* Local Storage */
// Dark Mode
const checkDarkMode = localStorage.getItem("Dark Mode")

if(checkDarkMode == 1){
    colorSwitch.checked
    darkMode()
    alert(checkDarkMode)
}

function darkMode() {
    if(colorSwitch.checked){
        document.querySelector('html').classList.add("dark-mode")
        localStorage.setItem("Dark Mode", 1)
    }else{
        document.querySelector('html').classList.remove("dark-mode")
        localStorage.setItem("Dark Mode", 0)
    }
}

// Functions
function play(){
    biNumberArray = []
    biNumber.innerHTML = ''
    deNumber = 0
    
    startLanding.style.display = 'none'
    gameLanding.style.display = 'block'
    let biNumberLength = Math.floor(Math.random() * 5) + 4
    
    for(let i = 0, c = biNumberLength - 1; i < biNumberLength;i++, c--){
        biNumberArray.push(Math.floor(Math.random() * 2))
        biNumber.innerHTML += biNumberArray[i]

        deNumber += biNumberArray[i] * Math.pow(2,c) 
    }
    console.log(deNumber)
}

function enterAction(){
    enterActive = 1
}

document.onkeydown = checkKey;
function checkKey(e) {
    // Teclas
    e = e || window.event;

    if(e.key == "Enter" && enterActive == 1){
        if(userNumber.value == deNumber){
            play()
        }else{
            alert("não fio")
        }
    }
}