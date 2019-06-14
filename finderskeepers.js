function findElement(arr, func) {
  return arr.filter(function(item){
    return func(item);
  })[0];
}
console.log(findElement([1, 3, 5,8, 9], num => num % 2 === 0)
);

// function isEven(value) {
//   return value % 2 == 0;
// }

// var filtered = [11, 98, -2, 23, 944].filter(isEven);
// console.log(filtered);