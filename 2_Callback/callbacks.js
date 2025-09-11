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

getUserData(
  "xyz",
  (user) => {
    console.log("User Data", user);
  },
  (error) => {
    console.log("Error", error);
  }
);
