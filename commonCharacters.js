/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(str1, str2) {

  //i: two strings
  //o: overlapping chars, in the order they appear in string
  //c/e: no duplicates

  var matches = [];
  var indexes = [];
  var final = [];
  //loop through str2
  for(var i = 0; i < str2.length; i++) {
    //push matches to results array.
    if(str1.indexOf(str2[i])!== -1) {
      matches.push(str2[i]);
    }
  }

  //push matching letters indexes(in arr1) into indexes array
  for(var j = 0; j < matches.length; j++) {
    indexes.push(str1.indexOf(matches[j]));
  }

  //sort matching indexes in str1
  var sorted = indexes.sort(function(a,b){return a-b;});

  //remove duplicates
  var finalSorted = Array.from(new Set(sorted));

  //for every value in finalSorted letter value to final array.
  finalSorted.forEach(el => {
    final.push(str1[el]);
  })

  return final
};
// commonCharacters('acexivou', 'aegihobu');