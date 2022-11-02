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
import { useParams } from "react-router-dom";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // Quản lý toàn bộ liên quan đến user
  const [userState, dispatch] = useReducer(userReducer, {
    user: null,
    users: [],
    userLoading: true,
  });

  // get all users
  // const getUsers = async () => {
  //   try {
  //     const response = await axios.get(`${apiUrl}/getUser`);
  //     if (response.data.success) {
  //       dispatch({
  //         type: USERS_LOADED_SUCCESS,
  //         payload: response.data.users,
  //       });
  //     }
  //     console.log((userState.users.gender_like = userState.users.gender));
  //   } catch (error) {
  //     dispatch({ type: USERS_LOADED_FAIL });
  //   }
  // };

  const getGenderUsers = async (gender) => {
    try {
      const response = await axios.get(
        `${apiUrl}/getGenderUser?${gender.gender_like}`
      );
      if (response.data.success) {
        dispatch({
          type: USERS_LOADED_SUCCESS,
          payload: response.data.user,
        });
      }
      console.log(getGenderUsers);
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

  //   User Context Data
  const userContextData = {
    getGenderUsers,
    deleteUser,
    userState,
  };

  return (
    <UserContext.Provider value={userContextData}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
