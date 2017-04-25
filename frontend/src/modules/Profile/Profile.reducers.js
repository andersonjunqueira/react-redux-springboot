import { PROFILE_LOADED } from '../../app/App.actions';

const profileReducer = (state = {}, action) => {

    switch (action.type) {

        case PROFILE_LOADED:
            return Object.assign({}, state, {
                ...action.payload
            });

        default:
            return state;

    }

}

export default profileReducer;