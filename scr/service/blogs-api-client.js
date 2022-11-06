const API_BASE_URL = `http://localhost:3000/api/posts`



export async function getAllPosts() {
    try {
        const postResp = await fetch(API_BASE_URL);
        if (postResp.status >= 400) {
            Promise.reject(postResp.body)
        }
        return postResp.json()
    } catch (err) {
        Promise
    }
}