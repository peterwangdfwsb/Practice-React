const initState = { isLoading: false, data: null, error: null };

const details = (state = initState, action) => {
  switch(action.type) {
    case "FETCH_DETAILS_START":
      return {
        ...state,
        isLoading: true
      };
    case "FETCH_DETAILS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.data,
        error: null
      }
    case "FETCH_DETAILS_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state;
  }
};

export default details;
