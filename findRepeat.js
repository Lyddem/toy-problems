function findRepeat(array) {


var sorted = array.sort();

  for(var i = 0; i < sorted.length; i++){
    if(sorted[i] === sorted[i+1]) {
      return sorted[i];
    }
  }
}

findRepeat([1,2,3,4,6,3,5]);

//complexity: O(n) - Linear

