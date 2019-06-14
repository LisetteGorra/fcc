function truncateString(str, num) {

var splitString = str.split("");
var newString = "";
if( str.length > num ){ // states that if the num is less that length of string will prnt with "..."
for (var i = 0; i < num; i++){
    newString = newString + splitString[i]; // re assigns var to be empty var + each element from split array
 
}

newString = newString + "..."; // adds the "... to the end of string"
return newString;
    }
    return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket",4));