const button = document.getElementById("button");

button.addEventListener("mouseover", function () {
  this.innerHTML = "NO_Click";
  this.style = "color:red";
  this.width = "150px";
});
button.addEventListener("mouseout", function () {
  this.innerHTML = "NO_Click";
  this.style = "color:blue";
  this.width = "19";
});

const image = document.getElementById("image");
