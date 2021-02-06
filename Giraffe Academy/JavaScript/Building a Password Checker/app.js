var password = 12345;
var count = 0;
var countLimit = 3;
var response;
var check = false;
while (response != password && !check ) {
  if (count <= countLimit) {
    response = window.prompt("Enter your password");
    count++;
  } else {
    check = true;
  }
}
if (check) {
  alert("Too many entries");
} else {
  alert("You got it");
}
