import axios from "axios";


// create an axios instance
const api = axios.create({
  // baseURL: "http://localhost:5000/api/auth",
  baseURL: "https://docify-backend-9aos.onrender.com/api/auth",
});


// Signup request Function

export const signUp = (formData) => {
  return api.post("/signup", formData);
};


// Login request funtion

export const loginU = (formData) => {
  return api.post("/login",formData);
};
