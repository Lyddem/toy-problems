function longestRun (string) {

  var max = [0,0];
  var curr = [0,0];

  if(string === '') {
    return null;
  }

  for (var i = 1; i < string.length; i++){
    var prev = string[i-1];
    if(string[i] === prev) {
      curr[1] = i;
      if(curr[1] - curr[0] > max[1] - max[0]){
        max = curr;
      }
    } else {
      curr = [i,i];
    }
  }
      return max;
}
