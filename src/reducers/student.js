
const initialState = {
  data: {
    students: [],
    page_count: 1,
    class_names: []
  },
  loading: false,
  uploadSucess: false,
  error: null,
};

const studentReducer = (state = initialState, action) => {
 switch (action.type) {
  case 'FETCH_STUDENT': return {
    ...initialState,
    data: { students: [], page_count: 1, class_names: []},
    uploadSucess: false,
    loading: true,
    error: null,
  }
  case 'FETCH_STUDENT_SUCCESS': return {
    ...initialState,
    data: action.payload,
    uploadSucess: false,
    loading: false,
    error: null,
  }
  case 'FETCH_STUDENT_FAIL': return {
    ...initialState,
    data: {},
    uploadSucess: false,
    loading: false,
    error: action.payload,
  }
  case 'FETCH_UPLOAD_SUCCESS': return {
    ...initialState,
    uploadSucess: true,
    loading: false,
    error: null,
  }
  case 'FETCH_UPLOAD_FAIL': return {
    ...initialState,
    uploadSucess: false,
    loading: false,
    error: action.payload,
  }
  default: return state
 }
}
export default studentReducer;
