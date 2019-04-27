
const initialState = {
  data: {
    students: {},
    attendance: {},
  },
  loading: false,
  error: null,
};

const attendanceReduecr = (state = initialState, action) => {
 switch (action.type) {
  case 'FETCH_ATTENDANCE': return {
    data: {
      students: {},
      attendance: {},
    },
    loading: true,
    error: null,
  }
  case 'FETCH_ATTENDANCE_SUCCESS': return {
    data: action.payload,
    loading: false,
    error: null,
  }
  case 'FETCH_ATTENDANCE_FAIL': return {
    data: {
      students: {},
      attendance: {},
    },
    loading: false,
    error: action.payload,
  }
  default: return state
 }
}
export default attendanceReduecr;
