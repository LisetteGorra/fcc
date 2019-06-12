function findLongestWordLength(str) {
    var strSplit = str.split(" "); 
    var longestWord = 0; // you need a place to store the length by number 
    for (var i = 0; i < strSplit.length; i ++){ //looping through the length of the loop, 9 indexes in array, 9 loops
        if( strSplit[i].length >= longestWord){ //comparing the length of each word to the longest word, looping 9 times between variable and a var[i].length
            longestWord = strSplit[i].length; //storing new longest length into varaiable longestWord
        }// length is returning an interger, we store it as a number and not a string for the challenge. 
    }
    return longestWord; // this will give you the  new number variable (remember we started at 0 on line 3)

//   var newArray = str.split(" ");
//   var lngstWord = "";
//   var lngstWordInt = 0;
// for (var i = 0; i < newArray.length; i++){
//     if( newArray[i].length >= lngstWordInt){
//         lngstWordInt = newArray[i].length;
//         lngstWord = newArray[i];
       
//     }

// }
//  console.log(lngstWord[i]);
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
