const sum = (...args) => {
    // const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
    // в скобках другая функция в котром a,b это элемента нашего массива
  }
  console.log(sum(1,2,1));


// const multi=(multiplier,...args)=>{
//     return args.map((elements)=>multiplier*elements);
// }

// console.log(multi(3,1,2,3));
//Output--3,6,9;
