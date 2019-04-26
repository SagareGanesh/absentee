import languageReducer from './language';
import studentReduecr from './students';
import { combineReducers } from 'redux';

export default combineReducers({
  languageReducer,
  studentReduecr,
});
