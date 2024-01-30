
const initialState = {
  users: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        users: action.payload,
        error: "",
      };

    case "ERROR":
      return {
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
