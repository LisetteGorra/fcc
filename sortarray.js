function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  arr.sort(function (a,b){ return a-b });
  num = arr.indexOf(num);
  
 
  return num;
}

console.log(getIndexToIns([3, 10, 5], 3));