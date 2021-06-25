import axios from "axios";

export const signupApi = (user) => axios.post("/auth/signup", { user });

export const loginApi = (user) => axios.post("/auth/login", { user });
