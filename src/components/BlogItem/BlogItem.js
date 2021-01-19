import { Link } from 'react-router-dom';
import "./BlogItem.scss";

function BlogItem({post}) {
    return (
        <div className="card">
            <div className="card-body">
                <Link to="/blog/1" className="blog-post-title"><h3 className="card-title">{post.title}</h3></Link>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum provident consequatur aperiam quo et eveniet neque quasi veritatis iure eligendi...</p>
            </div>
        </div>
    )
}

export default BlogItem
