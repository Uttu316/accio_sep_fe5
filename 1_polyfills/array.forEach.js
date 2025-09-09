// write a polyfill for forEach

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback) {
    let curr = this;

    for (let i = 0; i < curr.length; i++) {
      callback(curr[i], i, curr);
    }
  };
}

let arr = [4, 3, 2, 8, 12, 6, 7];
arr.forEach((item, index, curr) => console.log(item, index, curr));
