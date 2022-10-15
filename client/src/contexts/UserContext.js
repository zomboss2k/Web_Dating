import { createContext, useReducer } from "react";
import { userReducer } from "../reducers/userReducer";
import {
  apiUrl,
  USERS_LOADED_SUCCESS,
  USERS_LOADED_FAIL,
  DELETE_USER,
  UPDATE_USER,
  FIND_USER,
} from "./constants";
import axios from "axios";
import { useParams } from "react-router";

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
      dispatch({ type: USERS_LOADED_FAIL });
    }
  };

  const getUser = async () => {
    try {
      const username = useParams().username;
      const response = await axios.get(`${apiUrl}/getUser/?username=${username}`);
      if (response.data.success) {
        dispatch({
          type: USERS_LOADED_SUCCESS,
          payload: response.data.users,
        });
      }
    } catch (error) {
      dispatch({ type: USERS_LOADED_FAIL });
    }
  };
  // delete user
  const deleteUser = async (userId) => {
    try {
      const response = await axios.get(`${apiUrl}/delete/${userId}`);
      if (response.data.success) {
        dispatch({ type: DELETE_USER, payload: userId });
      }
    } catch (error) {
      dispatch({ type: USERS_LOADED_FAIL });
    }
  };

  // Find user when user is updating user
  const findUser = (userId) => {
    const user = userState.users.find((user) => user._id === userId);
    dispatch({ type: FIND_USER, payload: user });
  };

  // update user
  const updateUser = async (updateUser) => {
    try {
      const response = await axios.put(
        `${apiUrl}/updateUser/${updateUser._id}`,
        updateUser
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_USER, payload: response.date.user });
        return response.data;
      }
    } catch (error) {
      dispatch({ type: USERS_LOADED_FAIL });
    }
  };

  //   User Context Data
  const userContextData = {
    getUsers,
    getUser,
    deleteUser,
    updateUser,
    findUser,
    userState,
  };

  return (
    <UserContext.Provider value={userContextData}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
