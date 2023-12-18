import React, { useState } from 'react';

function CommentForm({ postId, addComment }) {
    const [formData, setFormData] = useState({ text: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addComment(postId, formData.text);
        setFormData({ text: '' }); // Clear the form
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="form-group">
                <textarea
                    className="form-control"
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                    placeholder="Write a comment..."
                    rows="3"
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
                Add Comment
            </button>
        </form>
    );
}

export default CommentForm;
