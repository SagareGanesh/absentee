const fetchAttendanceInitiate = () => {
  return {
    type: 'FETCH_ATTENDANCE'
  }
}

const fetchAttendanceSuccess = (data) => {
  return {
    type: 'FETCH_ATTENDANCE_SUCCESS',
    payload: data,
  }
}

const fetchAttendanceFail = (error) => {
  return {
    type: 'FETCH_ATTENDANCE_FAIL',
    payload: error,
  }
}

export const fetchAttendance = () => {
  return (dispatch) => {
    dispatch(fetchAttendanceInitiate());
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
      dispatch(fetchAttendanceSuccess(data));
    })
    .catch((error) => {
      dispatch(fetchAttendanceFail(error));
    })
  }
}
