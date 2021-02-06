const name1 = "abylay";

// function logger() {//function scope()--like local
//   const name = "Abylay";
//   console.log(name1);
//   console.log("Party time");
//   console.log("Party time");
//   console.log("Party time");
//   console.log("Party time");
//   console.log("Party time");

// }
// logger();

function toUpper(name) {
  //local function
  var name_upper = name.toUpperCase();
  console.log(name_upper);
}
toUpper(name1); //ABYLAY

// console.log(name1);//abylay

function sum(num1, num2) {
  console.log(num1 + num2);
}
sum(13, 12);
///////////---------Another way to create function---
//1)
var name2 = "Bob";
const Upper = function (text) {
  var name_upper = text.toUpperCase();
  console.log(name_upper);
};
Upper(name2);

//2)
var name3 = "James";
const Upper2 = (text) => {
  var name_upper = text.toUpperCase();
  console.log(name_upper);
};
Upper2(name3);
// Upper2("Jaymmy");
