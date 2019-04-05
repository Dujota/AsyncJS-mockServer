console.log('starts');

// Pretend Server
// Mock Data Base
const posts = [
  { title: 'Post One', body: 'This is my first post' },
  { title: 'Post Two', body: 'I made my second Post' },
];

// Create a Post /posts => Posts#create
function createPost(post) {
  setTimeout(function() {
    posts.push(post);

    console.log(posts);
  }, 2000);
}

// Option 1 var getPost =  axios.get({options})
// Optoion 2 var getPost = $.ajax({options})
// Get Post   /posts => Posts#index

function getPosts(posts) {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// create a third post
createPost({ title: 'post Three', body: 'post three is created' });

// get all the posts
getPosts(posts);

// double check that we have three posts
console.log(posts);
