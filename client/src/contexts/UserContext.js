import { createContext, useEffect, useReducer } from "react";
import { userReducer } from "../reducers/userReducer";
import { apiUrl, USERS_LOADED_SUCCESS, USERS_LOADED_FAIL } from "./constants";
import axios from "axios";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // Quản lý toàn bộ liên quan đến user
  const [userState, dispatch] = useReducer(userReducer, {
    user: null,
    users: [],
    userLoading: true,
  });

  // get all users
  const getUsers = async () => {
    try {
      const response = await axios.get(`${apiUrl}/getUser`);
      if (response.data.success) {
        dispatch({
          type: USERS_LOADED_SUCCESS,
          payload: response.data.users,
        });
      }
    } catch (error) {
     dispatch({ type: USERS_LOADED_FAIL});
    }
  };

  //   User Context Data
  const userContextData = { getUsers, userState };

  return (
    <UserContext.Provider value={userContextData}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
