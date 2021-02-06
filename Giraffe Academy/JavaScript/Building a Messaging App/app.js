const messages = document.getElementById("messages");
const textbox = document.getElementById("textbox");
const button = document.getElementById("button");

button.addEventListener("click", function () {
  const content = document.createTextNode(textbox.value);
  const Li = document.createElement("li");
  Li.appendChild(content);
  messages.appendChild(Li);
  textbox.value = "";
  
});
