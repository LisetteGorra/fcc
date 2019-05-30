function largestOfFour(arr) {
    
    var largestNumbers = [];
    // access each individual element of each sub array i.e. 4
    for (var i = 0; i < arr.length; i++){ // this loop gives you access to sub arrays, length = 4
           var largestNumber = -10020; // 
            arr[i].sort(function(b, a){return b-a}); // sorts each subarray from smallest to largest # 
            largestNumbers.push(arr[i].pop()); // 
        }
        return largestNumbers;
        //test output to confirm that we have access to each individual element
        
       
    }
//DRY ... Don't Repeat Yourself, keeps you from repeating your code over and over again, to use this program just call out the function when you need it.
console.log(largestOfFour([[400,5,1,3],[13,27,18,26], [32,35,37,39],[1000,1001,857,1],[-1000, -1001, -1, -857]]));