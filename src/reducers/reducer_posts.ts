import { FETCH_POSTS, FETCH_POST } from '../actions';
import * as _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POST:
            return { ...state, [action.payload.id]: action.payload.data };
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default: 
            return state;
    }
}
