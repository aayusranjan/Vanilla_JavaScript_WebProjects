const color = ['red', 'yellow', 'green', 'blue', 'brown']
const btn = document.querySelector('button');
const span = document.querySelector('span');
const body = document.querySelector('body');

btn.addEventListener("click", changeBackground);
// background color
function changeBackground(){
    const colorIndex = Math.floor(Math.random() * color.length);
    body.style.backgroundColor = color[colorIndex]; // chnage color
    span.textContent = color[colorIndex]; //change text
}
