function largestOfFour(arr) {
  var largestNumber = [];
  for (var i = 0; i < arr.length; i++){
    var results = arr[i][0];
      for(var j = 0; j < arr[i].length; j++){
        if( arr[i][j] > results){
            results = arr[i][j];
        }
      }
   
    
         largestNumber[i] = results; 
  }  
   return largestNumber;
}
//function largestOfFour(arr) {
//return arr.map(Function.apply.bind(Math.max, null));
// } // advanced solution

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));