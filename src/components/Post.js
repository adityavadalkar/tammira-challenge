import React from 'react'
import { useEffect } from 'react'

function Post(props) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
  }}>
        <div className="card w-50 mb-3 mt-2">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.body}</p>
                <footer className="blockquote-footer">Posted by User ID: {props.user}</footer>
            </div>
        </div>
    </div>
  )
}

export default Post