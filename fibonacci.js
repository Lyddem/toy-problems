//iterative
var fibonacci = function(n) {
  var arr = [0,1,1];

  for(var i = 3; i <=n; i++) {
    arr.push(arr[i-1] + arr[i-2]);
  }

  return arr[n];
};

//recursive solution
// var fibonacci = function(n) {
//   if(n === 0) {
//     return 0;
//   }

//   if(n === 1) {
//     return 1;
//   }

//   else {
//     return fibonacci(n-1) + fibonacci(n-2)
//   }
// }