// write a polyfill for forEach

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    let curr = this;
    let output = [];
    for (let i = 0; i < curr.length; i++) {
      output[i] = callback(curr[i], i, curr);
    }
    return output;
  };
}

let arr = [4, 3, 2, 8, 12, 6, 7];
const newArray = arr.myMap((item, index, curr) => item + index);

console.log(newArray);
