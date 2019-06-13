function repeatString( string, repeatNumTimes){
    if( repeatNumTimes < 0){
        return "";
    }
    var returnString = "";
    for (var i = 0; i < repeatNumTimes; i++){ // this loop prints on different lines
        returnString += string;
    }
    return returnString;
}

console.log(repeatString("Arnell", 5));







// function repeatStringNumTimes(str, num) {
//   var repeatNum = '';
//   while ( num > 0){
//       repeatNum += str;
//       num--;
//   }
//   return repeatNum;
// }

// console.log(repeatStringNumTimes("abc", 5));