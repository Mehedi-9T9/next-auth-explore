

const getPost = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    return data.json()

};

export default getPost;