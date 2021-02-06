const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line
//spread operator only works in-place, like in an argument to a function
console.log(arr2);


const num=[1,2,3,4,5,6];

let maximum=Math.max.apply(null,num);//ES5
let maximum1=Math.max(...num);//ES6
console.log(maximum1);
