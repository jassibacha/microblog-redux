import commentReducer from '../../../redux/reducers/commentReducer';
import { ADD_COMMENT, DELETE_COMMENT } from '../../../redux/actionTypes';

describe('comment reducer', () => {
    it('should handle ADD_COMMENT', () => {
        const startState = {};
        const newComment = {
            postId: '1',
            text: 'Great post!'
        };
        const action = { type: ADD_COMMENT, payload: newComment };

        const newState = commentReducer(startState, action);
        const addedCommentId = Object.keys(newState)[0]; // Get the ID of the newly added comment

        expect(newState[addedCommentId]).toMatchObject({
            ...newComment,
            id: addedCommentId // Validate the structure and content, not the exact ID
        });
    });

    it('should handle DELETE_COMMENT', () => {
        const startState = {
            'c1': { id: 'c1', postId: '1', text: 'Great post!' }
        };
        const action = { type: DELETE_COMMENT, payload: 'c1' };

        const expectedState = {};

        expect(commentReducer(startState, action)).toEqual(expectedState);
    });

    // Add more tests for other cases
});
