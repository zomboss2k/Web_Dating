import { USERS_LOADED_SUCCESS, USERS_LOADED_FAIL } from "../contexts/constants";
export const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USERS_LOADED_SUCCESS:
      return {
        ...state,
        users: payload,
        userLoading: false,
      };
    case USERS_LOADED_FAIL:
      return {
        ...state,
        users: [],
        userLoading: false,
      };

    default:
      return state;
  }
};
