const p = new Promise((resolve, reject) => {
  //sync task
  setTimeout(() => {
    resolve("done");
  }, 3000);
});

p.then((value) => {
  console.log(value);
}).catch((error) => {
  console.log(error);
});
