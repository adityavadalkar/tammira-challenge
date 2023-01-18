import React from 'react'

const handleClick = () => {
    console.log("gelo")
};

function PostModal() {
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
                        <input type="text" className="form-control" id="title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="body-text" className="col-form-label">Body:</label>
                        <textarea className="form-control" id="body-text"></textarea>
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