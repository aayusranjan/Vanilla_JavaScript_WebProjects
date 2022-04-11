const clock = document.querySelector('.clock')

// const new = () => {
// const now = new Date();
// const hrs = now.getHours();
// const sec = now.getSeconds();
// const min = now.getMinutes();

// console.log(hrs, sec, min);
// console.log("hey");
// }

// setInterval(tick, 1000);


const tick = () => {
    const now = new Date();
    const hrs = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    // to render on website.
    const html = `
    <span>${hrs}</span> :
    <span>${min}</span> :
    <span>${sec}</span>`
    
    clock.innerHTML = html;
}

setInterval(tick, 1000)
