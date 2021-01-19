import BlogItem from "../BlogItem/BlogItem";
import { useEffect, useContext, useState } from "react";
import postsContext from '../../context/posts/PostsContext'
import "./Blog.scss";
import PostsState from "../../context/posts/PostsState";
import Pagination from "../Pagination/Pagination";
function Blog() {
    const PostsContext = useContext(postsContext);
    useEffect(() => {
        PostsContext.getPosts();
    }, []);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = PostsContext.posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);
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
