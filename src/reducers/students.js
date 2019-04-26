
const initialState = {
  data: {},
  loading: false,
  error: null,
};

const studentReduecr = (state = initialState, action) => {
 switch (action.type) {
  case 'FETCH_STUDENTS': return {
    data: {},
    loading: true,
    error: null,
  }
  case 'FETCH_STUDENTS_SUCCESS': return {
    data: action.payload,
    loading: false,
    error: null,
  }
  case 'FETCH_STUDENTS_FAIL': return {
    data: {},
    loading: false,
    error: action.payload,
  }
  default: return state
 }
}
export default studentReduecr;
