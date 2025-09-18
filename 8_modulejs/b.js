import * as AVars from "./a.js";

console.log(AVars);
AVars.sum(2, 3);
AVars.sum(4, 6);
AVars.sum(8, 1);
AVars.sum(9, 3);
AVars.default();
AVars.default("From B.js");

console.log(AVars.user_123_student);
const user = {
  name: "XYZ",
};
console.log(user);
