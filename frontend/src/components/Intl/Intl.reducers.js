import { LANGUAGE_CHANGED } from './Intl.actions';

const intlReducer = (state = {}, action) => {

    switch (action.type) {

        case LANGUAGE_CHANGED:
            return Object.assign({}, state, {
                ...action.payload
            });

        default:
            return state;

    }

}

export default intlReducer;