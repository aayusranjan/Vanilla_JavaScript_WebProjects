const btn = document.querySelector('.btn');
const close = document.querySelector(".close");
const open = document.querySelector(".box-overlay");


btn.addEventListener('click', () => {
  open.style.display = "block";
});
close.addEventListener('click', ()=>{
    open.style.display = "none";
})
