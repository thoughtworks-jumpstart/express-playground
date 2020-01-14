const express = require("express");
const app = express();
const PORT = 3000;

const wrapAsync = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(err => next(err));
};

const notAsync = (req, res) => {
  res.send("i am not async function");
};

app.get("/notAsync", wrapAsync(notAsync));

// this function simulates one asynchronous operation,
// e.g. loading user profile from database
const loadUserProfileFromDB = userName => {
  return new Promise(resolve => {
    setTimeout(() => resolve({ name: userName, gender: "M" }), 10);
  });
};

const getUserProfile = async (req, res, next) => {
  const userName = req.params.userName;
  const userProfile = await loadUserProfileFromDB(userName);
  res.send(userProfile);
};

app.get("/users/:userName", wrapAsync(getUserProfile));

// this function simulates one asynchronous operation that generate errors,
// e.g. loading a blog entry from database
const loadBlogPostFromDB = postId => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Network Connection Error")), 10);
  });
};

const getBlogPost = async (req, res, next) => {
  const postId = req.params.postId;
  // note: this line below would throw error
  const post = await loadBlogPostFromDB(postId);
  res.send(post);
};

app.get("/posts/:postId", wrapAsync(getBlogPost));

app.use(function(err, req, res, next) {
  res.status(500);
  res.send({ err: err.message });
});

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
