export const [ LOADED_SIDEBAR_MENU ] = [ "LOADED_SIDEBAR_MENU" ];

import menuData from '../../menu.json';

export const sidebarMenuLoad = () => {
    return dispatch => {
        dispatch({type: LOADED_SIDEBAR_MENU, payload: menuData});
    }
}