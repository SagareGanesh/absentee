import { SET_LANGUAGE } from '../utils/constant';

export const setLanguage = (locale) => {
  return {    
    type: 'SET_LANGUAGE',
    payload: locale
  }
}
