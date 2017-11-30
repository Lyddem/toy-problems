/*Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number. (You should return all permutations, not only English words.) */

function telephoneWords (digitString) {

  var phoneDigitsToLetters = {
    0: '0',
    1: '1',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ'
  }

  var results = [];

  var recurse = function(word, digits) {
    if(digits.length === 0) {
      return results.push(word);
   }
   phoneDigitsToLetters[digits[0]].split('').forEach(letter => {
     recurse(word + letter, digits.slice(1));
   })
  }
    recurse('', digitString.split(''));
    return results;
};
