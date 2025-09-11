const getUserData = (userName, onSuccess, onFailure) => {
  console.log("User data fetching...");
  setTimeout(() => {
    if (userName == "abc") {
      onSuccess({
        name: "ABC",
        userId: "2121",
      });
    } else {
      onFailure("No user found");
    }
  }, 3000);
  console.log("User info in process");
};

const getPosts = (userId, onSuccess, onFailure) => {
  console.log("Posts fetching...", userId);
  setTimeout(() => {
    if (userId) {
      onSuccess({
        caption: "Good Morning",
        postId: "23221",
      });
    } else {
      onFailure("No post Found");
    }
  }, 2000);
  console.log("Processing Posts");
};

const getComments = (postId, onSuccess, onFailure) => {
  console.log("Fetching Comments", postId);
  setTimeout(() => {
    if (postId) {
      onSuccess({
        comment: "Hello",
        commentId: "32321",
      });
    } else {
      onFailure("No comment");
    }
  }, 2000);
  console.log("Comment in process");
};

getUserData(
  "abc",
  (user) => {
    console.log("User Data", user);
    getPosts(
      user.userId,
      (post) => {
        console.log("Post Data", post);
        getComments(
          post.postId,
          (comments) => {
            console.log("Comments", comments);
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log("Post Error", error);
      }
    );
  },
  (error) => {
    console.log("Error", error);
  }
);

console.log("Done");
