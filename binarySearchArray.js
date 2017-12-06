/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3

 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

function binarySearch (array, target) {

    var startIndex = 0;
    var endIndex = array.length-1;
    var middleIndex;
    var currentElement;

    while(startIndex <= endIndex) {
      middleIndex = Math.floor(startIndex + endIndex/2);
      currentElement = array[middleIndex];

    if(currentElement < target) {
      startIndex = middleIndex + 1;
    }
    else if(currentElement > target) {
      endIndex = middleIndex - 1;
    }
    else {
      return middleIndex;
    }
  }
    return -1;
}