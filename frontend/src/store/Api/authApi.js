import axios from "axios";

export const signupApi = (user) =>
  axios.post(`${process.env.REACT_APP_DATABASE_URL}/auth/signup`, { user });

export const loginApi = (user) =>
  axios.post(`${process.env.REACT_APP_DATABASE_URL}/auth/login`, { user });
