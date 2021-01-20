import { Link } from 'react-router-dom';
import "./BlogItem.scss";

function BlogItem({post}) {
    return (
        <div className="card">
            <div className="card-body">
                <Link to={`/blog/${post.id}`} className="blog-post-title"><h3 className="card-title">{post.title}</h3></Link>
                <p className="card-text">{post.body}</p>
            </div>
        </div>
    )
}

export default BlogItem
