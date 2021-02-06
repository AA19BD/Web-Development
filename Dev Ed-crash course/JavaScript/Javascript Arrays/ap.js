const schedule = ["wake up", "brush", "do tasks"];

console.log(schedule[2]);


schedule.push("review a tasks");//push to the last
console.log(schedule);

schedule.pop();//delete the last 
console.log(schedule);

schedule.shift();//delete first one
console.log(schedule);

schedule.unshift('wake up');//add to the first place  
console.log(schedule);

console.log(schedule.indexOf('wake up'));//return the index of the element in an array;

