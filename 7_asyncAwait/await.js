const fetch = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("hello");
    }, 3000);
  });
};

const getData = async () => {
  console.log("User Data");

  const res = await fetch();

  // const post = await getPost(res.userId)
  // const comment = await getComment(post.postId)
  console.log(res);
  return res + " Data";
};

getData()
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log("Error", err);
  });

console.log("Done");
