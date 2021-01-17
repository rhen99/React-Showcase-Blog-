import BlogItem from "../BlogItem/BlogItem";
import "./Blog.scss";
function Blog() {
    return (
        <>
            <div className="container blog">
                <h1 className="blog-title">Blog Posts</h1>
                <BlogItem/>
                <BlogItem/>
                <BlogItem/>
            </div>   
        </>
    )
}

export default Blog
