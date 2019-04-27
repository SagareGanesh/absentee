import { toast } from 'react-toastify';
import { DomainURL } from '../utils/constant';

const successNotify = (msg) => toast.success(msg);
const errorNotify = (msg) => toast.error(msg);

const setSchool = (school) => {
  return {
    type: 'SET_SCHOOL',
    payload: school
  }
}

export const getSchoolDetails = () => {
  return (dispatch) => {
      fetch(`${DomainURL}/schools/details`, {
      method: 'GET',
      headers: {
        'X-API-KEY': 'sdsadsad',
        'accept': 'application/vnd.parenotify.com; version=1',
        'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      return response.json()
    })
    .then(data => {
      dispatch(setSchool(data));
    })
    .catch((error) => {
      errorNotify("Failed to get school details")
    })
  }
}
