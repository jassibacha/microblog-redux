import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Post({ posts, deletePost }) {
    const { postId } = useParams();
    const navigate = useNavigate();
    const post = posts.find((p) => p.id === postId);

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
        </div>
    );
}

export default Post;
