const getUserData = (userName) => {
  console.log("User Data Fetching...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userName === "abc") {
        resolve({
          userId: "131211",
          name: "ABC",
        });
      } else {
        reject("No user found");
      }
    }, 3000);
  });
};

const getPost = (userId) => {
  console.log("Fetching Posts...", userId);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        resolve({
          caption: "Hello Fans",
          postId: "23231131",
        });
      } else {
        reject("No Post");
      }
    }, 3000);
  });
};

getUserData("abc")
  .then((user) => user.userId)
  .then((userId) => getPost(userId))
  .then((postData) => console.log(postData))
  .catch((err) => {
    console.log(err);
  });
