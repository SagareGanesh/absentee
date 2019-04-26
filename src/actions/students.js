import { FETCH_STUDENTS } from '../utils/constant';

const fetchStudentsInitiate = () => {
  return {
    type: 'FETCH_STUDENTS'
  }
}

const fetchStudentsSuccess = (data) => {
  return {
    type: 'FETCH_STUDENTS_SUCCESS',
    payload: data,
  }
}

const fetchStudentsFail = (error) => {
  return {
    type: 'FETCH_STUDENTS_FAIL',
    payload: error,
  }
}

export const fetchStudents = () => {
  return (dispatch) => {
    dispatch(fetchStudentsInitiate());
    fetch(`http://192.168.1.87:3000/students`, {
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
      dispatch(fetchStudentsSuccess(data));
    })
    .catch((error) => {
      dispatch(fetchStudentsFail(error));
    })
  }
}
