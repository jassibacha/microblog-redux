import * as actions from '../../../redux/actions/commentActions';
import { ADD_COMMENT, DELETE_COMMENT } from '../../../redux/actionTypes';

describe('comment actions', () => {
    it('creates an action to add a comment', () => {
        const newComment = {
            postId: '1',
            text: 'Great post!',
        };
        const expectedAction = {
            type: ADD_COMMENT,
            payload: newComment,
        };

        expect(actions.addComment(newComment)).toEqual(expectedAction);
    });

    it('creates an action to delete a comment', () => {
        const commentId = 'c1';
        const expectedAction = {
            type: DELETE_COMMENT,
            payload: commentId,
        };

        expect(actions.deleteComment(commentId)).toEqual(expectedAction);
    });

    // Add more tests for other actions as needed
});
