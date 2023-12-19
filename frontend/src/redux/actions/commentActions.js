import { ADD_COMMENT, DELETE_COMMENT } from '../actionTypes';

export const addComment = (comment) => ({
    type: ADD_COMMENT,
    payload: comment,
});

export const deleteComment = (commentId) => ({
    type: DELETE_COMMENT,
    payload: commentId,
});
