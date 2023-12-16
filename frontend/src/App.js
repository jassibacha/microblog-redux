import React, { useState } from 'react';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppRouter from './routes/AppRouter';

function App() {
    // Placeholder posts data
    const [posts, setPosts] = useState([
        {
            id: '1',
            title: 'Post 1',
            description: 'Description 1',
            body: 'Body 1',
        },
        {
            id: '2',
            title: 'Post 2',
            description: 'Description 2',
            body: 'Body 2',
        },
        {
            id: '3',
            title: 'Post 3',
            description: 'Description 3',
            body: 'Body 3',
        },
        {
            id: '4',
            title: 'Post 4',
            description: 'Description 4',
            body: 'Body 4',
        },
        // ... more posts
    ]);

    const addPost = (newPost) => {
        setPosts([...posts, { ...newPost, id: Date.now().toString() }]);
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
                />
            </div>
        </Router>
    );
}

export default App;
