import languageReducer from './language';
import attendanceReduecr from './attendance';
import studentReducer from './student';
import schoolReducer from './school';
import { combineReducers } from 'redux';

export default combineReducers({
  languageReducer,
  attendanceReduecr,
  studentReducer,
  schoolReducer
});
