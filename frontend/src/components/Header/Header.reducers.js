import { LOADED_HEADER_MENU, LOADED_USER_MENU } from './Header.actions';

const headerReducer = (state = {}, action) => {

    switch (action.type) {

        case LOADED_HEADER_MENU:
            return Object.assign({}, state, {
                headerMenu: action.payload
            });

        case LOADED_USER_MENU:
            return Object.assign({}, state, {
                userMenu: action.payload
            });

        default:
            return state;

    }

}

export default headerReducer;