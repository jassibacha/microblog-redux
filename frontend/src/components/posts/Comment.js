import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Comment({ comment, deleteComment }) {
    return (
        <div className="card mb-2">
            <div className="card-body d-flex justify-content-between align-items-center">
                <p className="card-text mb-0">{comment.text}</p>
                <button
                    className="btn btn-sm btn-link text-danger"
                    onClick={() => deleteComment(comment.id)}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        </div>
    );
}

export default Comment;
