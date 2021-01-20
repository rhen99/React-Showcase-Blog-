import {useContext, useEffect, useRef} from 'react'
import './PopularPosts.scss';
import BlogItem from '../BlogItem/BlogItem';
import postsContext from '../../context/posts/PostsContext';
function PopularPosts() {

    const PostsContext = useContext(postsContext);

    const mounted = useRef(false);
    useEffect(() => {
        mounted.current = true;
        if(mounted.current == true){
            PostsContext.getThreePosts();
        }
        return () => {
            mounted.current = false
        }
    }, []);

    return (
        <div className="popular">
            <div className="container popular-container">
                <h1 className="popular-title">Most Popular Blog Posts</h1>
                <div className="popular-grid">
                    {PostsContext.posts.map(post => (
                    <div key={post.id} className="popular-grid-tile">
                        <BlogItem  post={post} />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PopularPosts
