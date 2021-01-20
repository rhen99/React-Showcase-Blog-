import {useContext, useEffect} from 'react';
import { useParams } from "react-router-dom";
import CommentForm from '../CommentForm/CommentForm';
import CommentItem from '../CommentItem/CommentItem';
import './SinglePost.scss';

import postsContext from '../../context/posts/PostsContext';
function SinglePost() {
    const PostsContext = useContext(postsContext);

    const { id } = useParams();

    useEffect(() => {
        PostsContext.getPost(id);
    }, [PostsContext, id])
    return (
        <div className="container single">
            <h1 className="single-title">{PostsContext.post.title}</h1>
            <article className="single-body">
                <p className="single-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti, ducimus assumenda adipisci, repellendus quo suscipit harum totam aliquid rem quis ea vitae facere laboriosam debitis labore deleniti a. Eveniet ipsum ad dignissimos fuga eius autem ab sint, reprehenderit, minus voluptate dolorum ea dolorem! Architecto cumque dicta impedit accusantium sed, rerum sapiente alias voluptas rem provident odit possimus assumenda corporis, illo deserunt culpa laboriosam, modi eligendi enim natus magnam omnis eaque mollitia? Quod recusandae qui quo cum, porro beatae necessitatibus, eos vitae assumenda ullam ipsa mollitia tempore reprehenderit atque adipisci.
                </p>
                <p className="single-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti, ducimus assumenda adipisci, repellendus quo suscipit harum totam aliquid rem quis ea vitae facere laboriosam debitis labore deleniti a. Eveniet ipsum ad dignissimos fuga eius autem ab sint, reprehenderit, minus voluptate dolorum ea dolorem! Architecto cumque dicta impedit accusantium sed, rerum sapiente alias voluptas rem provident odit possimus assumenda corporis, illo deserunt culpa laboriosam, modi eligendi enim natus magnam omnis eaque mollitia? Quod recusandae qui quo cum, porro beatae necessitatibus, eos vitae assumenda ullam ipsa mollitia tempore reprehenderit atque adipisci.
                </p>
                <p className="single-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti, ducimus assumenda adipisci, repellendus quo suscipit harum totam aliquid rem quis ea vitae facere laboriosam debitis labore deleniti a. Eveniet ipsum ad dignissimos fuga eius autem ab sint, reprehenderit, minus voluptate dolorum ea dolorem! Architecto cumque dicta impedit accusantium sed, rerum sapiente alias voluptas rem provident odit possimus assumenda corporis, illo deserunt culpa laboriosam, modi eligendi enim natus magnam omnis eaque mollitia? Quod recusandae qui quo cum, porro beatae necessitatibus, eos vitae assumenda ullam ipsa mollitia tempore reprehenderit atque adipisci.
                </p>
            </article>
            <CommentForm/>
            <div className="comments">
                <h2 className="comments-title">(0) Comment</h2>
                <CommentItem/>
                <CommentItem/>
                <CommentItem/>
                <CommentItem/>
            </div>
        </div>
    )
}

export default SinglePost
