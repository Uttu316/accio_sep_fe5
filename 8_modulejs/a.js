import USER_DATA from "./c.js";
var x = 2;

export function sum(a, b) {
  console.log(a + b);
}

export const user_123_student = {
  name: "ABC",
  age: 12,
};
export const company_name = "SonyLiv";

function showTitle(text) {
  let title = document.createElement("h2");
  title.innerHTML = text || "Learning Module JS";
  document.body.append(title);
}

const name = "ABC";
console.log(USER_DATA);

export default showTitle;
