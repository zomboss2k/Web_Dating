export const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "USERS_LOADED_SUCCESS":
      return {
        ...state,
        users: payload,
        userLoading: false,
      };
    // case 'USERS_LOADED_SUCCESS':
    //     return {
    //         ...state,
    //         users: action.payload
    //     }
    default:
      return state;
  }
};
