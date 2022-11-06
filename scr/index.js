import { getAllPosts } from "./service/blogs-api-client";

(async function init() {
    const posts = await getAllPosts()
    const postElement = document.getElementById('posts')
    posts.forEach(post => postElement.appendChild(`<li><span>${post.title}</span>  : <span>${post.content}</span></li>`));
})