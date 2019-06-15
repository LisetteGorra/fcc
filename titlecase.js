function titleCase(str) {
  var newStr = str.toLowerCase().split(" ");
  var newArray = [];
  for (var i = 0; i < newStr.length; i++){
     newArray.push(newStr[i].charAt(0).toUpperCase()+newStr[i].slice(1));
  console.log(newStr[i].slice(1));
 }
 return newArray.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
