console.log("Hello World! This is a hackathon practice project.");
let arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((res, curr) => {
  return res + curr;
});
console.log(sum);
const largest = arr.reduce((pre, curr) => {
  return pre > curr ? pre : curr;
});
console.log(largest);
