export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api"
    : "gidodi";

export const LOCAL_STORAGE_TOKEN_NAME = 'dating'

export const USERS_LOADED_SUCCESS = 'USERS_LOADED_SUCCESS'
export const USERS_LOADED_FAIL = 'USERS_LOADED_FAIL'
export const DELETE_USER = 'DELETE_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const FIND_USER = 'FIND_USER'



