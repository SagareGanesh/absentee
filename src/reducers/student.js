
const initialState = {
  data: {
    students: [],
    total: 1,
    class_names: []
  },
  loading: false,
  error: null,
};

const studentReducer = (state = initialState, action) => {
 switch (action.type) {
  case 'FETCH_STUDENT': return {
    data: { students: [], total: 1, class_names: []},
    loading: true,
    error: null,
  }
  case 'FETCH_STUDENT_SUCCESS': return {
    data: action.payload,
    loading: false,
    error: null,
  }
  case 'FETCH_STUDENT_FAIL': return {
    data: {},
    loading: false,
    error: action.payload,
  }
  default: return state
 }
}
export default studentReducer;
