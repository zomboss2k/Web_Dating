import { createContext, useReducer } from "react";
import { userReducer } from "../reducers/userReducer";
import { apiUrl } from "./constants";
import axios from "axios";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // Quản lý toàn bộ liên quan đến user
  const { userState, dispatch } = useReducer(userReducer, {
    users: [],
    userLoading: true,
  });

  // get all users
  const getUsers = async () => {
    try {
      const response = await axios.get(`${apiUrl}/getUser`);
      if (response.data.success) {
        dispatch({ type: "USERS_LOADED_SUCCESS", payload: response.data.users });
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Lỗi server" };
    }
  };

//   User Context Data
const userContextData = { getUsers, userState};

  return (
    <UserContext.Provider value={userContextData}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
