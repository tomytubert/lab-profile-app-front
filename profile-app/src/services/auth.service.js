import axios from "axios"

const authApi = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:4000/auth"
})

export const update = (data) => authApi.post("/edit",data);

export const signup = (user) => authApi.post("/signup",user);

export const login = (user) => authApi.post("/login",user);