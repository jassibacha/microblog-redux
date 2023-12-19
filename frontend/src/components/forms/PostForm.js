import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addPost, editPost } from '../../redux/actions/postActions';

function PostForm() {
    const INITIAL_STATE = { title: '', description: '', body: '' };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { postId } = useParams(); // Used for editing
    const posts = useSelector((state) => state.posts);

    useEffect(() => {
        // If postId exists, we are editing an existing post
        if (postId && posts[postId]) {
            setFormData(posts[postId]);
        } else {
            // New post, use INITIAL_STATE
            setFormData(INITIAL_STATE);
        }
    }, [postId, posts]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (postId) {
            // If postId exists, we are editing an existing post
            dispatch(editPost(postId, formData));
        } else {
            // For a new post, no need to generate an ID here
            dispatch(addPost(formData));
        }
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
