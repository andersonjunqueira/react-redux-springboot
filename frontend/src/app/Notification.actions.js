import { addNotification as notify } from 'reapop';

import { translate } from "../components/Intl/Intl.actions";

export const toaster = (msg, params = [], configuration) => {

    const defaultConfig = {
        message: undefined,
        title: undefined,
        status: "info", 
        dismissible: true, 
        position: "tc", 
        dismissAfter: 3000
    };

    const formatted = translate(msg, params);
    const config = Object.assign(defaultConfig, {
        message: formatted,
        ...configuration
    });

    return notify(config);
}
