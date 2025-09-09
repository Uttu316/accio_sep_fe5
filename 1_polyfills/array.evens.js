Array.prototype.even = function () {
  let currArray = this;
  let evens = [];

  for (let i = 0; i < currArray.length; i++) {
    let item = currArray[i];
    if (item % 2 === 0) {
      evens.push(item);
    }
  }
  return evens;
};

let arr = [4, 3, 2, 8, 12, 6, 7];

let evens = arr.even();

console.log(evens);
