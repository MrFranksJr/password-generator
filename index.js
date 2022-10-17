const caps = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const syms = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const lettrs = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let capitals = document.getElementById("fs1")
let digits = document.getElementById("fs2")
let symbols = document.getElementById("fs3")
let slider = document.getElementById("myRange")
let output = document.getElementById("output")
let passOne = document.getElementById("pw1")
let passTwo = document.getElementById("pw2")

let hasLength = 8
let hasCapitals = true
let hasDigits = true
let hasSymbols = true

//onload execution
collectArrays()

//all about pw generation
function collectArrays() {
    let mergedArray = []
    let outputNumber = output.textContent;
    //building the array, according to options
    if (hasCapitals==true && hasDigits==true && hasSymbols==true) {
        mergedArray = [...caps, ...syms, ...nums, ...lettrs]
        generatePasswords(outputNumber, mergedArray)
    }
    else if (hasCapitals==true && hasDigits==true && hasSymbols==false) {
        mergedArray = [...caps, ...nums, ...lettrs]
        generatePasswords(outputNumber, mergedArray)
    }
    else if (hasCapitals==true && hasDigits==false && hasSymbols==false) {
        mergedArray = [...caps, ...lettrs]
        generatePasswords(outputNumber, mergedArray)
    }
    else if (hasCapitals==false && hasDigits==false && hasSymbols==false) {
        mergedArray = lettrs
        generatePasswords(outputNumber, mergedArray)
    }
    else if (hasCapitals==false && hasDigits==true && hasSymbols==false) {
        mergedArray = [...nums, ...lettrs]
        generatePasswords(outputNumber, mergedArray)
    }
    else if (hasCapitals==false && hasDigits==true && hasSymbols==true) {
        mergedArray = [...syms, ...nums, ...lettrs]
        generatePasswords(outputNumber, mergedArray)
    }
    else if (hasCapitals==false && hasDigits==false && hasSymbols==true) {
        mergedArray = [...syms,...lettrs]
        generatePasswords(outputNumber, mergedArray)
    }
    else if (hasCapitals==true && hasDigits==false && hasSymbols==true) {
        mergedArray = [...caps, ...syms, ...lettrs]
        generatePasswords(outputNumber, mergedArray)
    }
}

function generatePasswords(outputNumber, mergedArray) {
    let pass1 = ""
    let pass2 = ""
    let arrayLength = mergedArray.length
    for (let i = 0; i < outputNumber; i++) {
        let char1 = mergedArray[Math.floor(Math.random()*arrayLength)]
        let char2 = mergedArray[Math.floor(Math.random()*arrayLength)]
        pass1 = pass1 + char1
        pass2 = pass2 + char2
    }
    passOne.textContent = pass1
    passTwo.textContent = pass2
}

//copy on click
function copyClickPw(passBox) {
    // Get the pw
    let copyText = document.getElementById(passBox);
    let toolTipText = document.getElementById("toolTip" + passBox)
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.textContent);
    toolTipText.textContent = "Copied!"
    //reset
    setTimeout(function(){toolTipText.textContent = "Click to copy..."}, 3000)
  }


//slider/rb behavior
capitals.addEventListener('change', function() {
    if (this.checked) {
      hasCapitals = true
      collectArrays()
    } else {
      hasCapitals = false
      collectArrays()
    }
  });
  
  digits.addEventListener('change', function() {
      if (this.checked) {
        hasDigits = true
        collectArrays()
      } else {
        hasDigits = false
        collectArrays()
      }
    })
  
  symbols.addEventListener('change', function() {
      if (this.checked) {
        hasSymbols = true
        collectArrays()
      } else {
        hasSymbols = false
        collectArrays()
      }
    })
  
    slider.addEventListener('change', function() {
      collectArrays()
    })