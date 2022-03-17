let counterDisplay = document.querySelector('p');
let decrement = document.getElementById('minus');
let reset = document.getElementById("reset");
let increment = document.getElementById("plus");


let count = 0;
//set initialize count to zero

// updateDisplay() function help to render(update) the value on page
function updateDisplay(){
    counterDisplay.textContent = count;
}

updateDisplay();


decrement.addEventListener('click', () => {
  count--; //when click the decrement button it will be trigger and start decreasing number
  updateDisplay();
});

reset.addEventListener('click', ()=>{
    count = 0;//its reset the value to 0.
    updateDisplay();
})

increment.addEventListener("click", () => {
  count++; //when click the increment button it will be trigger and start increasing number
  updateDisplay();
});