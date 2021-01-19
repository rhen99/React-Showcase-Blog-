import './CommentForm.scss';
function CommentForm() {
    return (
        <form action="#" className="comment_form">
            <div className="form-inline" style={{ flexDirection: 'row' }}>
                <div className="form-group" style={{ flex: 1 }}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" className="form-control"/>
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="name" id="name" className="form-control"/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="body">Comment</label>
                <textarea name="body" id="body" rows="10" className="form-control"></textarea>
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-secondary" value="Post Comment"/>
            </div>
        </form>
    )
}

export default CommentForm