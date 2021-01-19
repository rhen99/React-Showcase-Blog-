import './PopularPosts.scss';
import BlogItem from '../BlogItem/BlogItem';
function PopularPosts() {
    return (
        <div className="popular">
            <div className="container popular-container">
                <h1 className="popular-title">Most Popular Blog Posts</h1>
                <div className="popular-grid">
                    <div className="popular-grid-tile">
                        <BlogItem/>
                    </div>
                    <div className="popular-grid-tile">
                        <BlogItem/>
                    </div>
                    <div className="popular-grid-tile">
                        <BlogItem/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularPosts
