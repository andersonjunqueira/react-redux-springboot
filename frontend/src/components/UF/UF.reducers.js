import { UF_LIST_LOADED } from './UF.actions';

const ufReducer = (state = {}, action) => {

    switch (action.type) {

        case UF_LIST_LOADED:
            return Object.assign({}, state, {
                ufs: action.payload
            });

        default:
            return state;

    }

}

export default ufReducer;