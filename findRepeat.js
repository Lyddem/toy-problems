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

/* Alternate solution ! *

function findRepeat(array) {
  for(var i = 0; i < array.length; i++) {

    //if indexes are not the same - first repeated character

    if(array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
      return array[i];
    }
  }
    return false;

*/