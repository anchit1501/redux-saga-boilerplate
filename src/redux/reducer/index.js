const reducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, loading: true };
    case "USER_DATA_RECEIVED":
      console.log("data", action.json);
      return { ...state, userData: action.json, loading: false };
    default:
      return state;
  }
};
export default reducer;
