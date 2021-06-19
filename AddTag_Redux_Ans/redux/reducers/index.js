const reducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_TAG":
      return [...state, { text: action.text, id: action.id }];
    case "DELETE_TAG":  
      return state.filter((tag) => tag.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
