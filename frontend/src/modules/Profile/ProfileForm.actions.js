import axios from "axios";

import { toaster } from "../../app/Notification.actions";

export const [ PROFILE_LOADED, PROFILE_SAVED, PROFILE_SAVE_ERROR ] = [ "PROFILE_LOADED", "PROFILE_SAVED", "PROFILE_SAVE_ERROR" ];

export const saveProfile = (profile) => {
    return dispatch => {

        axios.post('/usuarios', profile)
            .then(function(response) {
                dispatch({type: PROFILE_SAVED, payload: response.data});
                dispatch(toaster("perfil-salvo-sucesso", [], {status: "success"}));

            }).catch(function(response){
                dispatch({type: PROFILE_SAVE_ERROR, payload: response.data});
            });

    }
}

