import {
  USERS_LOADED_SUCCESS,
  USERS_LOADED_FAIL,
  DELETE_USER,
  UPDATE_USER,
  FIND_USER,
} from "../contexts/constants";
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

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload),
      };

    case FIND_USER:
      return {
        ...state,
        user: payload,
      };

    case UPDATE_USER: {
      const newUsers = state.users.map((user) =>
        user._id === payload._id ? payload : user
      );
      return {
        ...state,
        users: newUsers,
      };
    }

    default:
      return state;
  }
};
