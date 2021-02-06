function printManyTimes(str) {
    const SENTENCE = str + " is cool!";//A common practice when naming constants is to use all uppercase letters,
    // with words separated by an underscore.
    for (let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  }
  printManyTimes("freeCodeCamp");