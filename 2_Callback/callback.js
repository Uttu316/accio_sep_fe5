const print = (num) => {
  console.log("Output is ", num);
};

const sum = (a, b, callback) => {
  const out = a + b;
  callback(out);
};
const mul = (a, b, callback) => {
  const out = a * b;
  callback(out);
};

sum(3, 2, print);
mul(4, 4, print);
