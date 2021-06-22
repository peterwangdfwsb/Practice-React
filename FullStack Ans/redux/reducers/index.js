const reducer = (state = [], action) => {
  switch(action.type) {
    case "SEARCH_SUCCESS":
      return action.data;
    default:
      return state;
  }
};

export default reducer;
