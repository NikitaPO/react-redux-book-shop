const initialState = {
  searchQuery: "",
  filterBy: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload
      };
    case "SET_FILTER":
      return {
        ...state,
        filterBy: action.payload
      };
    default:
      return state;
  }
};
