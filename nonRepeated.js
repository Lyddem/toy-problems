/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

function nonRepeated(str) {

  var hash = {};

  for(var i = 0; i < str.length; i++) {
    let el = str[i];
    if(!hash[el]) {
      hash[el] = 1;
    } else {
      hash[el]++;
    }
  }

  for(var key in hash) {
    if(hash[key] === 1) {
      return key;
    }
  }
}

nonRepeated('AACBDB');