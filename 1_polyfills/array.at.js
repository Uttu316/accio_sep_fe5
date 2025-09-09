Array.prototype.at = null; // assumption

if (!Array.prototype.at) {
  Array.prototype.at = function (index) {
    return this[index];
  };
}

let arr = [4, 3, 2, 8, 12, 6, 7];

let value = arr.at(0);

console.log(value);
