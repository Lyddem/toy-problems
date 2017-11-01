var largestProductOfThree = function(arr) {

  //order the arr (least --> greatest)
  var sorted = arr.sort(function(a,b) {
    return a-b;
  });

  let lastThree = sorted.slice(sorted.length-3, sorted.length)

  //product of greatest three positive numbers
  let multThree = lastThree.reduce(function(accum,val) {
    return accum * val;
  },1);

  //product of least two numbers * greatest num
  let firstTwoTimesLast = sorted[0] * sorted[1] * sorted[sorted.length-1];

  //compare
  return multThree > firstTwoTimesLast ? multThree : firstTwoTimesLast;
};
