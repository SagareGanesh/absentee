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
    fetch(`http://192.168.1.87:3000/attendance`, {
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

const submitAttendanceInitiate = () => {
  return {
    type: 'SUBMIT_ATTENDANCE'
  }
}

const submitAttendanceSuccess = (data) => {
  return {
    type: 'SUBMIT_ATTENDANCE_SUCCESS',
    payload: data,
  }
}

const submitAttendanceFail = (error) => {
  return {
    type: 'SUBMIT_ATTENDANCE_FAIL',
    payload: error,
  }
}

export const submitAttendance = (data) => {
  return (dispatch) => {
    dispatch(fetchAttendanceInitiate());
    fetch(`http://192.168.1.87:3000/attendance/submit`, {
      method: 'POST',
      headers: {
        'X-API-KEY': 'sdsadsad',
        'accept': 'application/vnd.parenotify.com; version=1',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
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
