import {React, useEffect, useState} from 'react'
import Post from './Post'
import PostModal from './PostModal'
import { set } from '../redux/poster'
import { store } from '../redux/store'
import { useDispatch } from 'react-redux'

function PostPage() {
    const [posts, setPosts] = useState([{}])
    const [ignore, setIgnore] = useState(false)

    const dispatch = useDispatch()
    const handleChange = () => {
        setPosts(store.getState().addPost.posts)
    }
    const getPosts = () => {
        fetch( 'https://jsonplaceholder.typicode.com/posts' )
        .then( (response) => response.json())
        .then( (json) => {
            setPosts(json.slice(0, 10))
            dispatch(set(json.slice(0, 10)))
        })
    }
    store.subscribe(handleChange)

    useEffect(() => {
        if (!ignore){
            getPosts();
            setIgnore(true)
        }
    }, [posts.length])

    return (
    <div>
        {posts.map(({ title, body, userId }, index)=>{
         return <Post key={index} title={title} body={body} user={userId}/>
        })}
        <PostModal />
    </div>
    )
}

export default PostPage