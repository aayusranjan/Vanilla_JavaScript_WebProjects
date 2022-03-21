
const reviews = [
  {
    id: 1, //not use just for real world response
    img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    author: "Emmy E",
    job: "WEB DEVELOPER",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A recusandae commodi quae libero quibusdam est rerum animi ex veniam voluptas!",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/10041258/pexels-photo-10041258.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    author: "Olivia C",
    job: "WEB DEVELOPER",
    content:
      "Would definitely recommend ItemScribe and will definitely be ordering again.",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    author: "Sophia E",
    job: "WEB DEVELOPER",
    content:
      "heard about this on gypsy jazz radio, decided to give it a try.",
  },
];

// selecte items

const img = document.querySelector("img");
const author = document.querySelector(".title");
const job = document.querySelector(".job");
const content = document.querySelector(".card__desp");

// selecte buttons

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const btn = document.querySelector(".btn");

//load initial item

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

// person based items

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.author;
  job.textContent = item.job;
  content.textContent = item.content;
}

//show next person
right.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1){
    currentItem = 0;
  }
    // adding array lenght to maintain the accessing of element.
    
  showPerson(currentItem);
});

//show previous person
left.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
