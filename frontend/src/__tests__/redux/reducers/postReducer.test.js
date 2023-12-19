import postReducer from '../../../redux/reducers/postReducer';
import { ADD_POST, DELETE_POST } from '../../../redux/actionTypes';

describe('post reducer', () => {
    it('should handle ADD_POST', () => {
        const startState = {};
        const newPost = {
            id: '1',
            title: 'Test Post',
            description: 'Test Description',
            body: 'Test Body',
        };
        const action = { type: ADD_POST, payload: newPost };

        const newState = postReducer(startState, action);
        const addedPostId = Object.keys(newState)[0]; // Get the ID of the newly added post

        expect(newState[addedPostId]).toEqual({
            ...newPost,
            id: addedPostId, // Validate the structure and content
        });
    });

    it('should handle DELETE_POST', () => {
        const startState = {
            1: {
                id: '1',
                title: 'Test Post',
                description: 'Test Description',
                body: 'Test Body',
            },
        };
        const action = { type: DELETE_POST, payload: '1' };

        const expectedState = {};

        expect(postReducer(startState, action)).toEqual(expectedState);
    });

    // Add more tests for other cases
});
