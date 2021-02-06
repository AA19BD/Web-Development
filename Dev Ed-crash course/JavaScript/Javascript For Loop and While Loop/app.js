const names = ["Berk", "Bob", "Jorsh", "Clark", "Stevven"];

for (name of names) {
  //looping through names
  console.log(`hello there ${name}`);
}

for (name of names) {
  console.log(`hello there ${name}`);
  if (name === "Bob") {
    console.log("Find in my list");
    break;
  }
}
//---------------While loop---

let check=0;
while(check<10){
    console.log(`Hello there ${check}`);
    check++;
}