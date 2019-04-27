const initialState = {
  school: {},
};

const schoolReducer = (state = initialState, action) => {
 switch (action.type) {
  case 'SET_SCHOOL': return {
    school: action.payload
  }
  default: return state
 }
}
export default schoolReducer;
