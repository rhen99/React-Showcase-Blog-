import './CommentItem.scss'
function CommentItem() {
    return (
        <div className="comment">
            <div className="comment-left">
                <div className="comment-avatar"></div>
            </div>
            <div className="comment-right">
                <div className="comment-body">
                    <h5 className="comment-name">John Doe</h5>
                    <p className="comment-email">jdoe@gmail.com</p>
                    <div className="comment-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo fuga voluptatibus facere a blanditiis saepe consequatur dolores, quaerat ab laudantium voluptatum harum cumque quos perferendis illo commodi? Animi, ab?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentItem
