// const getData = ()=>{
//     return Promise.resolve("data")
// }

// const getData = ()=>{
//     return new Promise((res)=>{
//         res("data")
//     })
// }

const getData = async () => {
  console.log("B");
  // return "data"
  throw new Error("oops");
};

console.log("A");
getData()
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log("Error", err);
  });

console.log("C");
