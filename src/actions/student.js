const fetchStudentInitiate = () => {
  return {
    type: 'FETCH_STUDENT'
  }
}

const fetchStudentSuccess = (data) => {
  return {
    type: 'FETCH_STUDENT_SUCCESS',
    payload: data,
  }
}

const fetchStudentFail = (error) => {
  return {
    type: 'FETCH_STUDENT_FAIL',
    payload: error,
  }
}

export const fetchStudents = (page=1, size=10, search=null, class_name=null) => {
  return (dispatch) => {
    dispatch(fetchStudentInitiate());
    let params = `page=${page}&size=${size}`
    if(search){ params+= `&q=${search}` }
    if(class_name){ params+= `&class_name=${class_name}` }

    fetch(`http://192.168.1.87:3000/students?${params}`, {
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
      dispatch(fetchStudentSuccess(data));
    })
    .catch((error) => {
      dispatch(fetchStudentFail(error));
    })
  }
}
