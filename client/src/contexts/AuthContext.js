// Quản lý xác thực người dùng
import { createContext, useReducer, useEffect, useState } from "react";
import { authReducer } from "../reducers/authReducer";
import {
  apiUrl,
  LOCAL_STORAGE_TOKEN_NAME,
  USERS_LOADED_FAIL,
  UPDATE_USER,
  USERS_LOADED_SUCCESS,
} from "./constants";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });

  // Authentication
  const loadUser = async () => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }

    try {
      const response = await axios.get(`${apiUrl}`);
      if (response.data.success) {
        dispatch({
          type: "SET_AUTH",
          payload: { isAuthenticated: true, user: response.data.user },
        });
      }
    } catch (error) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
      setAuthToken(null);
      dispatch({
        type: "SET_AUTH",
        payload: { isAuthenticated: false, user: null },
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      loadUser();
    };

    fetchData();
  }, []);

  // LoginForm
  const loginUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/login`, userForm);
      if (response.data.success)
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.access_token
        );

      await loadUser();

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // RegisterForm
  const registerUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/register`, userForm);
      if (response.data.success)
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.access_token
        );

      await loadUser();

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const logoutUser = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    dispatch({
      type: "SET_AUTH",
      payload: { isAuthenticated: false, user: null },
    });
  };

  // update user
  const updateUser = async (updateUser) => {
    try {
      const response = await axios.put(
        `${apiUrl}/updateUser/${updateUser._id}`,
        updateUser
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_USER, payload: response.data.user });
        return response.data;
      }
    } catch (error) {
      dispatch({ type: USERS_LOADED_FAIL });
    }
  };

  const getUser = async (userName) => {
    try {
      const response = await axios.get(
        `${apiUrl}/getUser/${userName.username}`,
        userName
      );
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

  const authContextData = {
    loginUser,
    registerUser,
    logoutUser,
    updateUser,
    getUser,
    authState,
  };

  //   return provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
