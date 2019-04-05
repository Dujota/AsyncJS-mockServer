// Mock Data Base
const posts = [
  { title: 'Post One', body: 'This is my first post' },
  { title: 'Post Two', body: 'I made my second Post' },
];

// pass a callback as an argument parameter
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);

    // make sure that the callback is indeed a function
    if (typeof callback === 'function') {
      callback(); // simply invoke the callback
    }
  }, 2000);
}

function getPosts(callback) {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
    if (typeof callback === 'function') {
      callback();
    }
  }, 1000);
}

// pretend this is the object you build after submitting a form
const newPost = { title: 'post Three', body: 'post three is created' };
// create a third post
createPost(newPost, getPosts);
getPosts();
// get all the posts
// getPosts(posts);

// output is 2 posts since the create post is async
console.log(posts);
