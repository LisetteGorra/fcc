function repeatString( string, repeatNumTimes){
    if( repeatNumTimes < 0){
        return "";
    }
    for (var i = 0; i < repeatNumTimes; i++){
        console.log(string);
    }
}

repeatString("Arnell", 2);







// function repeatStringNumTimes(str, num) {
//   var repeatNum = '';
//   while ( num > 0){
//       repeatNum += str;
//       num--;
//   }
//   return repeatNum;
// }

// console.log(repeatStringNumTimes("abc", 5));