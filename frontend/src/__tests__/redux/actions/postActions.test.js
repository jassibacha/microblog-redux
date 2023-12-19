import * as actions from '../../../redux/actions/postActions';
import { ADD_POST, DELETE_POST } from '../../../redux/actionTypes';

describe('post actions', () => {
    it('creates an action to add a post', () => {
        const newPost = {
            title: 'Test Post',
            description: 'Test Description',
            body: 'Test Body',
        };
        const expectedAction = {
            type: ADD_POST,
            payload: newPost,
        };

        expect(actions.addPost(newPost)).toEqual(expectedAction);
    });

    it('creates an action to delete a post', () => {
        const postId = '1';
        const expectedAction = {
            type: DELETE_POST,
            payload: postId,
        };

        expect(actions.deletePost(postId)).toEqual(expectedAction);
    });
});
