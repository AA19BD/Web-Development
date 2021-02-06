const button = document.getElementById("button");
const sayhi = () => {
  alert("HIxI");
};
button.addEventListener("click", function () {
  setTimeout(() => {
    sayhi();
}, 1000);
});
// button.addEventListener("click", function () {
//     setInterval(() => {
//       sayhi();
//   }, 1000);
//   });
