import BlogItem from "../BlogItem/BlogItem";
import { useEffect, useContext, useRef } from "react";
import usePagination from '../../hooks/usePagination';
import postsContext from '../../context/posts/PostsContext'
import "./Blog.scss";
import Pagination from "../Pagination/Pagination";
function Blog() {
    const mounted = useRef(false);
    const PostsContext = useContext(postsContext);
    useEffect(() => {
        mounted.current = true;
        if(mounted.current == true){
            PostsContext.getPosts();
        }
        return () =>{
            mounted.current = false;
        }
    }, []);
    const [paginate, nextPage, prevPage, currentPage, indexOfFirstPost, indexOfLastPost, postPerPage] = usePagination(10);
    const currentPosts = PostsContext.posts.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <>
            <div className="container blog">
                
                <h1 className="blog-title">Blog Posts</h1>
                {currentPosts.map(post => (
                    <BlogItem post={post} key={post.id}/>
                ))}
                <Pagination nextPage={nextPage} prevPage={prevPage} currentPage={currentPage} paginate={paginate} postPerPage={postPerPage} totalPosts={PostsContext.posts.length}/>
            </div>   
        </>
    )
}

export default Blog
