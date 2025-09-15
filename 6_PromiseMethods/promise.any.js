const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("A");
  }, 3000);
}); //3(A)
const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("B");
  }, 2000);
}); //2(B)//failure
const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("C");
  }, 1500);
}); //1.5(C)

const p = Promise.any([p1, p2, p3]);

p.then((res) => {
  console.log(res);
}).catch((err) => {
  consol.log("Error", err);
});
