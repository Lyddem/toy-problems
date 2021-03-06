
//remove all duplicates from an array.
function removeDuplicates(arr) {
  let noDuplicates = new Set(arr);
  return Array.from(noDuplicates);
}

//find Duplicate values
function findDuplicates(arr) {

  let duplicates = [];
  let store = {};

  for(var i = 0; i < arr.length; i++) {
    if(!store[arr[i]]){
      store[arr[i]] = 1;
    } else {
      duplicates.push(arr[i]);
    }
  }
    return removeDuplicates(duplicates);
}

//indexOf vs lastIndexOf solution
function findDuplicate (arr) {

  let store = [];

  for(var i = 0; i < arr.length; i++) {
    if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      store.push(arr[i]);
    }
  }
    return removeDuplicates(store);
}