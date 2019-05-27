function largestOfFour(arr) {
    
    // access each individual element of each sub array i.e. 4
    for (var i = 0; i < arr.length; i++){ // this loop gives you access to sub arrays, length = 4
        for (var j = 0; j < arr[i].length; j++){ // this loop gives access to elements inside subarray arr[i] is looping through sub array but the .length lets us go inside the sub array
            
        }
    }
    
    
    return arr;
    
}
//DRY ... Don't Repeat Yourself, keeps you from repeating your code over and over again, to use this program just call out the function when you need it.
largestOfFour([[4,5,1,3],[13,27,18,26], [32,35,37,39],[1000,1001,857,1]]);