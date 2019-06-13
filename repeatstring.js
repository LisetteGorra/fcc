function repeatStringNumTimes(str, num) {
  var repeatNum = '';
  while ( num > 0){
      repeatNum += str;
      num--;
  }
  return repeatNum;
}

console.log(repeatStringNumTimes("abc", 5));