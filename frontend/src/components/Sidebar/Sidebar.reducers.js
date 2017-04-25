import { LOADED_SIDEBAR_MENU } from './Sidebar.actions';

const sidebarReducer = (state = {}, action) => {

    switch (action.type) {

        case LOADED_SIDEBAR_MENU:
            return  Object.assign({}, state, {
                sidebarMenu: action.payload
            });

        default:
            return state;

    }

}

export default sidebarReducer;