function findLongestWordLength(str) {
  var newArray = str.split(" ");
  var sortedArray = newArray.sort((a,b) =>{ return a.length < b.length});
  return sortedArray[0].length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
