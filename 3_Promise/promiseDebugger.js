console.log("A");

const p = new Promise((resolve, reject) => {
  console.log("B");
  //sync task
  const num = parseInt(prompt("Enter a number")); //144
  setTimeout(() => {
    console.log("D");
    if (num % 2 === 0) {
      resolve("Even"); //async
    } else {
      reject("Odd"); //async
    }
    console.log("E");
  }, 3000);
  console.log("C");
});
console.log("F");
p.then((value) => {
  //async
  console.log(value);
}).catch((error) => {
  //async
  console.log("Error", error);
});
console.log("G");
