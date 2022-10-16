/* const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
 */

let capitals = document.getElementById("fs1")
let digits = document.getElementById("fs2")
let symbols = document.getElementById("fs3")
let slider = document.getElementById("myRange")
let output = document.getElementById("output")

capitals.addEventListener('change', function() {
  if (this.checked) {
    console.log("Capitals included...")
  } else {
    console.log("Capitals not included...")
  }
});

digits.addEventListener('change', function() {
    if (this.checked) {
      console.log("Digits included...")
    } else {
      console.log("Digits not included...")
    }
  })

symbols.addEventListener('change', function() {
    if (this.checked) {
      console.log("Symbols included...")
    } else {
      console.log("Symbols not included...")
    }
  })

  slider.addEventListener('change', function() {
    let outputNumber = output.textContent;
    console.log("Value changed: " + outputNumber)
  })
  