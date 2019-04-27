import { toast } from 'react-toastify';
import { DomainURL } from '../utils/constant';

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

const createStudentInitiate = () => {
  return {
    type: 'CREATE_STUDENT'
  }
}

const createStudentSuccess = (data) => {
  return {
    type: 'CREATE_STUDENT_SUCCESS',
    payload: data,
  }
}

const createStudentFail = (error) => {
  return {
    type: 'CREATE_STUDENT_FAIL',
    payload: error,
  }
}


export const fetchStudents = (page=1, size=10, search=null, class_name=null) => {
  return (dispatch) => {
    dispatch(fetchStudentInitiate());
    let params = `offset=${page}&size=${size}`
    if(search){ params+= `&q=${search}` }
    if(class_name){ params+= `&class_name=${class_name}` }

    fetch(`${DomainURL}/students?${params}`, {
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
    fetch(`${DomainURL}/students/upload`, {
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

export const createStudent = (data) => {
  return (dispatch) => {
    dispatch(createStudentInitiate());
    fetch(`${DomainURL}/students`, {
      method: 'GET',
      headers: {
        'X-API-KEY': 'sdsadsad',
        'accept': 'application/vnd.parenotify.com; version=1',
        'Content-Type': 'application/json'
      },
      body: JSON.parse(data),
    })
    .then((response) => {
      return response.json()
    })
    .then(data => {
      dispatch(createStudentSuccess(data));
    })
    .catch((error) => {
      dispatch(createStudentFail(error));
    })
  }
}
