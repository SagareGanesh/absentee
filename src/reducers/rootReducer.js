import languageReducer from './language';
import attendanceReduecr from './attendance';
import studentReducer from './student';
import { combineReducers } from 'redux';

export default combineReducers({
  languageReducer,
  attendanceReduecr,
  studentReducer
});
