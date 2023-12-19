import { ADD_POST, EDIT_POST, DELETE_POST } from '../actionTypes';

export const addPost = (post) => ({
    type: ADD_POST,
    payload: post,
});

export const editPost = (postId, updatedPost) => ({
    type: EDIT_POST,
    payload: { postId, updatedPost },
});

export const deletePost = (postId) => ({
    type: DELETE_POST,
    payload: postId,
});
