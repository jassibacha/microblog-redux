import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { deletePost } from '../../redux/actions/postActions';
import Comment from './Comment';
import CommentForm from '../forms/CommentForm';

function Post() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { postId } = useParams();
    const post = useSelector((state) => state.posts[postId]);
    const comments = useSelector((state) =>
        Object.values(state.comments).filter(
            (comment) => comment.postId === postId
        )
    );

    const handleEdit = () => {
        navigate(`/${postId}/edit`);
    };

    const handleDelete = () => {
        dispatch(deletePost(postId));
        navigate('/');
    };

    if (!post) {
        return <div>Loading...</div>; // Or handle the "post not found" scenario
    }

    return (
        <div className="post-content">
            <h2>{post.title}</h2>
            <div className="description">{post.description}</div>
            <p>{post.body}</p>
            <div className="d-flex justify-content-end">
                <button
                    onClick={handleEdit}
                    className="btn btn-link text-primary"
                >
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                    onClick={handleDelete}
                    className="btn btn-link text-danger"
                >
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </div>

            <h3>Comments</h3>
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}

            {/* Add Comment Form */}
            <CommentForm postId={post.id} />
        </div>
    );
}

export default Post;
