import {React, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post'
import PostModal from './PostModal'

function PostPage() {
    const { posts } = useSelector((state) => state.addPost)
    const dispatch = useDispatch()
    useEffect(() => {
        fetch( 'https://jsonplaceholder.typicode.com/posts' )
        .then( (response) => response.json())
        .then( (json) => console .log(json))
    }, [])
    return (
    <div>
        {posts.map(({ title, body })=>{
         return <Post title={title} body={body}/>
        })}
        <PostModal />
    </div>
    )
}

export default PostPage