import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function PostForm({ savePost, posts }) {
    const INITIAL_STATE = { title: '', description: '', body: '' };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const navigate = useNavigate();
    const { postId } = useParams(); // Used for editing

    useEffect(() => {
        if (postId) {
            const postToEdit = posts.find((p) => p.id === postId);
            if (postToEdit) {
                setFormData({ ...postToEdit });
            }
        } else {
            setFormData(INITIAL_STATE); // Reset form when adding a new post
        }
    }, [postId, posts]);

    const handleSubmit = (e) => {
        e.preventDefault();
        savePost({ ...formData, id: postId }); // Pass ID for edit, undefined for new post
        navigate('/');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((fData) => ({
            ...fData,
            [name]: value,
        }));
    };

    return (
        <div>
            <h1>{postId ? 'Edit Post' : 'Add Post'}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <textarea
                        className="form-control"
                        id="body"
                        name="body"
                        rows="3"
                        value={formData.body}
                        onChange={handleChange}
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
        </div>
    );
}

export default PostForm;
