const s = [5, 7, 2];
function editInPlace() {
  // s = [2, 5, 7]
  s[0]=2;
  s[1]=5;
  s[2]=7;
}
editInPlace();
//Like all arrays, the array elements in s are mutable, 
//but because const was used,
// you cannot use the variable identifier s to point to a different array using the assignment operator.