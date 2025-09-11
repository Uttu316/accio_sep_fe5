const p = new Promise((resolve, reject) => {
  //sync task
  const num = parseInt(prompt("Enter a number"));
  setTimeout(() => {
    if (num % 2 === 0) {
      resolve("Even"); //async
    } else {
      reject("Odd"); //async
    }
  }, 3000);
});
p.then((value) => {
  //async
  console.log(value);
}).catch((error) => {
  //async
  console.log(error);
});
