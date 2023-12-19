import { ADD_POST, EDIT_POST, DELETE_POST } from '../actionTypes';
import { v4 as uuidv4 } from 'uuid';
import initialPosts from '../../data/InitialPosts';

const initialState = initialPosts;

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            const newId = uuidv4();
            return { ...state, [newId]: { ...action.payload, id: newId } };

        case EDIT_POST:
            return {
                ...state,
                [action.payload.postId]: action.payload.updatedPost,
            };

        case DELETE_POST:
            const newState = { ...state };
            delete newState[action.payload];
            return newState;

        default:
            return state;
    }
}
