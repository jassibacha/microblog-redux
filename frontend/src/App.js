import React, { useState } from 'react';
import Header from './components/layout/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import initialPosts from './data/InitialPosts';
import initialComments from './data/InitialComments';
import { v4 as uuidv4 } from 'uuid';

function App() {
    // Placeholder data for posts & comments
    const [posts, setPosts] = useState(initialPosts);
    const [comments, setComments] = useState(initialComments);

    const addPost = (newPost) => {
        setPosts([...posts, { ...newPost, id: uuidv4() }]);
    };

    const editPost = (updatedPost) => {
        setPosts(
            posts.map((post) =>
                post.id === updatedPost.id ? updatedPost : post
            )
        );
    };

    const deletePost = (postId) => {
        setPosts(posts.filter((post) => post.id !== postId));
        setComments(comments.filter((comment) => comment.postId !== postId)); // Also remove related comments
    };

    const addComment = (postId, text) => {
        const newComment = {
            id: uuidv4(),
            postId,
            text,
        };
        setComments([...comments, newComment]);
    };

    const deleteComment = (commentId) => {
        setComments(comments.filter((comment) => comment.id !== commentId));
    };

    return (
        <Router>
            <Header />
            <div className="container mt-5">
                <AppRouter
                    posts={posts}
                    addPost={addPost}
                    editPost={editPost}
                    deletePost={deletePost}
                    comments={comments}
                    addComment={addComment}
                    deleteComment={deleteComment}
                />
            </div>
        </Router>
    );
}

export default App;
