import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

function PostList({ posts }) {
    return (
        <div className="row">
            {posts.map((post) => (
                <div key={post.id} className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to={`/${post.id}`}>{post.title}</Link>
                            </h5>
                            <p className="card-text">{post.description}</p>
                            <Link
                                to={`/${post.id}`}
                                className="btn btn-primary"
                            >
                                View Post{' '}
                                <FontAwesomeIcon icon={faCaretRight} />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostList;
