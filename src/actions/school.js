import { toast } from 'react-toastify';

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
      fetch(`http://192.168.1.87:3000/schools/details`, {
      method: 'GET',
      headers: {
        'X-API-KEY': 'sdsadsad',
        'accept': 'application/vnd.parenotify.com; version=1'
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
