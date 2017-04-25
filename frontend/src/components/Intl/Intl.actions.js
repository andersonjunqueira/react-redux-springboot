import { toaster } from "../../app/App.actions";

import intlStrings from '../../intl.json';

export const [ LANGUAGE_CHANGED ] = [ "LANGUAGE_CHANGED" ];

let config;

export const getAvailableLanguages = () => {
    let langs = [];
    Object.keys(intlStrings).map((keyName, keyIndex) => langs.push(keyName));
    return langs;
}

const format = (str, args) => {
  var formatted = str;
  for (var i = 0; i < args.length; i++) {
      var regexp = new RegExp('\\{'+i+'\\}', 'gi');
      formatted = formatted.replace(regexp, args[i]);
  }
  return formatted;
}

export const translate = (str, params = []) => {
    let out = config.currentStrings[str];
    return out ? format(out, params) : "???" + str + "???";
}

export const changeLanguage = (lang, silent = false) => {
  return dispatch => {

      config = {
          currentLanguage: lang,
          availableLanguages: getAvailableLanguages(),
          currentStrings: intlStrings[lang]
      };

      dispatch({type: LANGUAGE_CHANGED, payload: config});

      if(!silent) {
          dispatch(toaster("idioma-alterado", [config.currentStrings.langId]));
      }
  }
}

