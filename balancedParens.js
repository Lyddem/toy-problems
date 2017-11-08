/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 */

 function  isBalanced (str) { //[{] current = '}'
  var hash = {
    '{':'}',
    '[':']',
    '(':')'
  };

  var final = [];

  function isClosed(el) {
    if(el === '}' || el === ']' || el === ')') {
      return true;
    } else {
      return false;
    }
  }

  function isOpen(el) {
    if(el === '{' || el === '[' || el === '(') {
      return true;
    } else {
      return false;
    }
  }

  for(var i = 0; i < str.length; i++) {
    let el = str[i]
    if(isOpen(el)) {
      final.push(el);
    }
    if(isClosed(el)) {
      if(hash[final[final.length-1]] === el) {
        final.splice(final.length-1, 1)
      }
    }
  }

  return final.length === 0;

}

/* alternate solution

function  isBalanced (str) {
  var hash = {
    '}':'{',
    ']':'[',
    ')':'('
  };

  var final = [];

  function isClosed(el) {
    if(el === '}' || el === ']' || el === ')') {
      return true;
    } else {
      return false;
    }
  }

  function isOpen(el) {
    if(el === '{' || el === '[' || el === '(') {
      return true;
    } else {
      return false;
    }
  }

  for(var i = 0; i < str.length; i++) {
    let el = str[i];

    if(isOpen(el)) {
      final.push(el);
    }

    if(isClosed(el)){
      if(final.pop() !== hash[el]) {
        return false;
      }
    }
  }
  return final.length === 0;
}

*/