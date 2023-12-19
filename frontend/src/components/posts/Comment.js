import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../redux/actions/commentActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Comment({ comment }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteComment(comment.id));
    };
    return (
        <div className="card mb-2">
            <div className="card-body d-flex justify-content-between align-items-center">
                <p className="card-text mb-0">{comment.text}</p>
                <button
                    className="btn btn-sm btn-link text-danger"
                    onClick={handleDelete}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        </div>
    );
}

export default Comment;
