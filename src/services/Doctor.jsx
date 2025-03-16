import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5000/api/doctors"
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});




// Apply for Doctor...

export const applyForDoctor = (formData) => {
    return api.post("/apply", formData)
}



// Get all Doctors, which is approved by the admin

export const getDoctors = () => {
    return api.get("/getAllDoc")
}
