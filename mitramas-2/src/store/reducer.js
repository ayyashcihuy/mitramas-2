import actionType from "./actionType";

const initData = {
  users: [],
  authorization: "",
  loading: false,
  error: null,
};

function reducer(state = initData, action) {
  switch (action.type) {
    case actionType.FETCH_DATA:
      return {
        ...state,
        users: action.payload,
      };
    case actionType.LOGIN:
      return {
        ...state,
        authorization: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
