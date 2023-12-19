import { ADD_COMMENT, DELETE_COMMENT } from '../actionTypes';
import { v4 as uuidv4 } from 'uuid';
import initialComments from '../../data/InitialComments';

const initialState = initialComments;

export default function commentReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            const newCommentId = uuidv4();
            return {
                ...state,
                [newCommentId]: { ...action.payload, id: newCommentId },
            };

        case DELETE_COMMENT:
            const newState = { ...state };
            delete newState[action.payload];
            return newState;

        default:
            return state;
    }
}
