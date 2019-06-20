function mutation(arr) {
    var word1 = arr[1].toLowerCase();
    var word2 = arr[0].toLowerCase();
    for(var i = 0; i < word1.length; i++){
        if(word2.indexOf(word1[i]) < 0) // compares the words and if it equals 0 it will return a false
            return false;
        }
        return true;
    }
console.log(mutation(["hello", "hey"]));