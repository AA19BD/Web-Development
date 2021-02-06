function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    }
    return "Not Found";
    // Only change code above this line
  }
  // We can use the .hasOwnProperty(propname) method of objects to determine 
  //if that object has the given property name. 