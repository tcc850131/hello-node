console.log("hello world!");

function sum(param) {
  // TODO: 請從 1 + 2 + 3 + .... + param
  let sum = 0;
  for (let i = 1; i <= param; i++) {
    sum += i;
  }
  return sum;
}


console.log(sum(3)); // 6
console.log(sum(6)); // 21
console.log(sum(10)); // 55