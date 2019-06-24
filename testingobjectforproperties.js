// Modify the function checkObj to test myObj for checkProp. If the property is found, return that property's value. If not, return "Not Found".

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if(myObj.hasOwnProperty(checkProp) == true){
      return myObj[checkProp];
  }else {
     return "Not Found";
}
}
// Test your code by modifying these values
console.log(checkObj("chair")); // this returns not found