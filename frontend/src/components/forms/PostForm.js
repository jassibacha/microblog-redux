import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function PostForm({ savePost, post }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();
    const { postId } = useParams(); // Used for editing

    useEffect(() => {
        if (post) {
            // Is post provided? It's an edit operation
            setTitle(post.title);
            setDescription(post.description);
            setBody(post.body);
        }
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { title, description, body, id: postId };
        savePost(formData); // Either edit or add automatically from routes
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="body">Body</label>
                <textarea
                    className="form-control"
                    id="body"
                    rows="3"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
                Save
            </button>
            <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate('/')}
            >
                Cancel
            </button>
        </form>
    );
}

export default PostForm;
