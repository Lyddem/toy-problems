function isPalindrome(string) {
  var str = string.split('');
  var reverse = str.slice().reverse().join('');

  return string === reverse;

}

console.log(isPalindrome('helleh'));