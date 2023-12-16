import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
        <div>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>{post.body}</p>
            <button onClick={handleEdit} className="btn btn-primary">
                Edit Post
            </button>
            <button onClick={handleDelete} className="btn btn-danger">
                Delete Post
            </button>
        </div>
    );
}

export default Post;
