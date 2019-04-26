import languageReducer from './language';
import attendanceReduecr from './attendance';
import { combineReducers } from 'redux';

export default combineReducers({
  languageReducer,
  attendanceReduecr,
});
