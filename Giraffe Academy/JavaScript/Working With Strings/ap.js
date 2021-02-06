var phrase = " The text ";
var text = "The";
document.write(phrase.length); //10
document.write(phrase.toUpperCase()); //THE TEXT
document.write(phrase.toLowerCase()); //the text
document.write(phrase.charAt(1)); //T
document.write(phrase.indexOf("The")); //1
document.write(phrase.substring(0, 6)); // The t
document.write(phrase.substring(phrase.indexOf("T"), 4)); //the
document.write(phrase.endsWith(" ")); //true
document.write(phrase.includes(text)); //true
document.write(phrase+" "+text);// The text The
