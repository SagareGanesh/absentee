import { SET_LANGUAGE } from '../utils/constant';
import { DomainURL } from '../utils/constant';
import { toast } from 'react-toastify';

const successNotify = (msg) => toast.success(msg);
const errorNotify = (msg) => toast.error(msg);

const setOnLanguageUpdateSuccess = (locale) => {
  return {
    type: 'SET_LANGUAGE',
    payload: locale
  }
}

export const setLanguage = (locale) => {
  return (dispatch) => {
    // dispatch(fetchAttendanceInitiate());
    fetch(`${DomainURL}/schools/set_language`, {
      method: 'PUT',
      headers: {
        'X-API-KEY': 'sdsadsad',
        'accept': 'application/vnd.parenotify.com; version=1',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({locale: locale}),
    })
    .then((response) => {
      return response.json()
    })
    .then(data => {
      dispatch(setOnLanguageUpdateSuccess(locale));
      // successNotify("Language Set successfully!")
    })
    .catch((error) => {
      // errorNotify("Failed To Set Language")
    })
  }
}
