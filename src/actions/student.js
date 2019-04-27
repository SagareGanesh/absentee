import { toast } from 'react-toastify';

const successNotify = (msg) => toast.success(msg);
const errorNotify = (msg) => toast.error(msg);

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

const fetchUploadSuccess = (data) => {
  return {
    type: 'FETCH_UPLOAD_SUCCESS',
    payload: data,
  }
}

const fetchUploadFail = (error) => {
  return {
    type: 'FETCH_UPLOAD_FAIL',
    payload: error,
  }
}

export const fetchStudents = (page=1, size=10, search=null, class_name=null) => {
  return (dispatch) => {
    dispatch(fetchStudentInitiate());
    let params = `offset=${page}&size=${size}`
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
      errorNotify("Failed to get student details")
    })
  }
}

export const upload = (data) => {
  return (dispatch) => {
    // dispatch(fetchAttendanceInitiate());
    fetch(`http://192.168.1.87:3000/students/upload`, {
      method: 'POST',
      headers: {
        'X-API-KEY': 'sdsadsad',
        'accept': 'application/vnd.parenotify.com; version=1'
      },
      body: data,
    })
    .then((response) => {
      return response.json()
    })
    .then(data => {
      dispatch(fetchUploadSuccess(data));
      successNotify("Student details uploaded successfully!")
    })
    .catch((error) => {
      dispatch(fetchUploadFail(error));
      errorNotify("Failed to upload student details")
    })
  }
}
