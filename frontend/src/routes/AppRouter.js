import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostForm from '../components/forms/PostForm';
import PostList from '../components/posts/PostList';
import Post from '../components/posts/Post';

function AppRouter({
    posts,
    addPost,
    editPost,
    deletePost,
    comments,
    addComment,
    deleteComment,
}) {
    return (
        <Routes>
            <Route path="/" element={<PostList posts={posts} />} />
            <Route
                path="/new"
                element={<PostForm savePost={addPost} posts={posts} />}
            />
            <Route
                path=":postId"
                element={
                    <Post
                        posts={posts}
                        deletePost={deletePost}
                        comments={comments}
                        addComment={addComment}
                        deleteComment={deleteComment}
                    />
                }
            />
            <Route
                path=":postId/edit"
                element={<PostForm savePost={editPost} posts={posts} />}
            />
        </Routes>
    );
}

export default AppRouter;
