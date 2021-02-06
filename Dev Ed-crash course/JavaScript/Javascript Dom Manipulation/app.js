// const text = document.querySelector(".title");
// const changeColor = document.querySelector(".changeColor");

// // text.classList.add("change");
// text.classList.remove("change");

// changeColor.addEventListener("click", function () {
//   //   text.classList.add("change");
//   text.classList.toggle("change");
// });

// const names=document.querySelectorAll(".names-list li");

// for(user of names){
//     user.addEventListener("click",function(){
//         this.style.color="red";

//     });
// }
const nameList = document.querySelector(".names-list");
const pushButton = document.querySelector(".pushButton");
const input = document.querySelector(".input");

pushButton.addEventListener("click", function () {
  const content = document.createTextNode(input.value);
  const listOfitems = document.createElement("LI");
  listOfitems.appendChild(content);
  nameList.appendChild(listOfitems);
});
