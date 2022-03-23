const hamburger = document.querySelector("#hamburger");
const sideBar = document.querySelector(".sidebar");

hamburger.addEventListener("click", () => {  
  toggleText();

});

function toggleText(){
    let x = sideBar;
    if(x.style.display === "block"){
        x.style.display = "none";
    }else {
        x.style.display = "block";
    }
}
