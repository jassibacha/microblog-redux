import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/layout/Header';
import PostForm from '../components/forms/PostForm';
import PostList from '../components/posts/PostList';
import Post from '../components/posts/Post';

function AppRouter({ posts, addPost, editPost, deletePost }) {
    return (
        <Routes>
            <Route path="/" element={<PostList posts={posts} />} />
            <Route path="/new" element={<PostForm savePost={addPost} />} />
            <Route
                path=":postId"
                element={<Post posts={posts} deletePost={deletePost} />}
            />

            <Route
                path=":postId/edit"
                element={<PostForm savePost={editPost} />}
            />
        </Routes>
    );
}

export default AppRouter;