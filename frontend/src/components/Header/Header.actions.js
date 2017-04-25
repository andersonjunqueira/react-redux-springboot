export const [ LOADED_HEADER_MENU, LOADED_USER_MENU ] = [ "LOADED_HEADER_MENU", "LOADED_USER_MENU" ];

import appData from '../../app.json';

export const headerMenuLoad = () => {
    return dispatch => {
        dispatch({type: LOADED_HEADER_MENU, payload: appData.headerMenu});
    }
}

export const userMenuLoad = () => {
    return dispatch => {
        dispatch({type: LOADED_USER_MENU, payload: appData.userMenu});
    }
}