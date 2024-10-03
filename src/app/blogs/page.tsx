
import Post from '@/Components/Post/Post';
import getPost from '@/lib/getPost'
import { getServerSession } from 'next-auth';
import { authOption } from '../api/auth/[...nextauth]/route';


type blog = {
    userId: number,
    id: number,
    title: string,
    body: string
}
const blogsPage = async () => {
    const blogs = await getPost()
    const session = await getServerSession(authOption)
    console.log("from line: 17", { session });


    return (
        <div>
            <h2>Totoal Blogs: {blogs.length}</h2>
            <div className='grid grid-cols-4 gap-5'>
                {blogs.map((blog: blog) => <Post key={blog.id} post={blog}></Post>)}
            </div>

        </div>
    );
};

export default blogsPage;