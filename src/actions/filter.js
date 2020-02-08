export const setFilter = filterBy => ({
  type: "SET_FILTER",
  payload: filterBy
});

export const setSearchQuery = query => ({
  type: "SET_SEARCH_QUERY",
  payload: query
});
