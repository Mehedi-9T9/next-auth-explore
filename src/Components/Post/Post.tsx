type blog = {
    userId: number,
    id: number,
    title: string,
    body: string
}

const Post = ({ post }: { post: blog }) => {
    return (
        <div className="border p-5 rounded">
            <h2 className="mb-3 text-2xl font-semibold">{post.title}</h2>
            <p>{post.body}</p>

        </div>
    );
};

export default Post;