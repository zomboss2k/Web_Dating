import { createContext, useReducer } from "react";
import { postReducer } from "../reducers/postReducer";
import { apiUrl } from "./constants";
import axios from "axios";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  // Quản lý toàn bộ liên quan đến user
  const { postState, dispatch } = useReducer(postReducer, {
    posts: [],
    postLoading: true,
  });
  //   Get all posts
  const getPosts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/getUser`);
      if (response.data.success) {
        dispatch({ type: "POSTS_LOADED_SUCCESS", payload: response.data.users });
      }
    } catch (error) {
        return error.response.data
        ? error.response.data
        : { success: false, message: "Lỗi server" };
    }
  };

const postContextData = { getPosts, postState};

  return (
    <PostContext.Provider value={postContextData}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider
