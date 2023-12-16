import React from 'react';
import { Link } from 'react-router-dom';

function PostList({ posts }) {
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>
                        <Link to={`/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p>{post.description}</p>
                </div>
            ))}
        </div>
    );
}

export default PostList;
