import {React, useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, set, get } from '../redux/poster'

function PostModal() {
    const [titleText, settitleText] = useState("")
    const [bodyText, setbodyText] = useState("")
    var { posts } = useSelector((state) => state.addPost)
    const dispatch = useDispatch()

    const handleClick = () => {
        fetch( 'https://jsonplaceholder.typicode.com/posts' , {
        method : 'POST' ,
        body: JSON.stringify({
            title: titleText,
            body: bodyText,
            userId: Math.floor(Math.random() * 100)
        }),
        headers : {
        "Content-type" : "application/json; charset=UTF-8"
        }
        })
        .then( response => response.json())
        .then( json => {
            dispatch(add(json))
        })
        setbodyText("")
        settitleText("")
    };

    return (
        <div>
            <button type="button" id="post-btn" className="btn btn-primary d-flex mb-2" data-toggle="modal" data-target="#myModal">Add Post</button>
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title fs-5" id="exampleModalLabel">New Post</h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="col-form-label">Title:</label>
                            <input type="text" className="form-control" id="title" value={titleText} onChange={(event) => settitleText(event.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="body-text" className="col-form-label">Body:</label>
                            <textarea className="form-control" id="body-text" value={bodyText} onChange={(event) => setbodyText(event.target.value)}></textarea>
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" id="submit" className="btn btn-primary d-flex" data-dismiss="modal" target="_blank" onClick={handleClick}>Submit</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
  )
}

export default PostModal