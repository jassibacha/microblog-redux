import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Comment from './Comment';
import CommentForm from '../forms/CommentForm';

function Post({ posts, deletePost, comments, addComment, deleteComment }) {
    const { postId } = useParams();
    const navigate = useNavigate();
    const post = posts.find((p) => p.id === postId);
    const postComments = comments.filter(
        (comment) => comment.postId === post.id
    );

    if (!post) {
        return <div>Loading...</div>; // Or handle the "post not found" scenario
    }

    // Handle edit operation
    const handleEdit = () => {
        navigate(`/${post.id}/edit`);
    };

    // Handle delete operation
    const handleDelete = () => {
        deletePost(post.id);
        navigate('/');
    };

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
            {postComments.map((comment) => (
                <Comment
                    key={comment.id}
                    comment={comment}
                    deleteComment={deleteComment}
                />
            ))}

            {/* Add Comment Form */}
            <CommentForm postId={post.id} addComment={addComment} />
        </div>
    );
}

export default Post;
