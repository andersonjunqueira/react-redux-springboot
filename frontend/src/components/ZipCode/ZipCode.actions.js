import axios from "axios";

import  { textFunctions } from '../Text';

export const searchZipcode = (zipcode, callback) => {
    axios({ url: '/zipcodes/' + textFunctions.clearMask(zipcode), method: 'get', responseType: 'json' })
        .then(function(response) {
            callback(response.data);
        }).catch(function(response){
            callback(undefined);
        });
}


