import { SET_LANGUAGE } from '../utils/constant';

const initialState = {
  locale: 'en',
};

const languageReducer = (state = initialState, action) => {
 switch (action.type) {
  case SET_LANGUAGE: return {
    locale: action.payload
  }
  default: return state
 }
}
export default languageReducer;
