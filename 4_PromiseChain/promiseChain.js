const p = new Promise((resolve) => {
  setTimeout(() => {
    resolve("A");
  }, 2000);
});

p.then((i) => i + "B")
  .then((value) => {
    console.log(value);
  })
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
