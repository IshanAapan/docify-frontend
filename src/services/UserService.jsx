import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5000/api",
    // headers: {
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    // },
});


// Add an interceptor to set the Authorization header dynamically => access the authorized api using token only

// Why This is Better?
// Ensures the latest token is used every time a request is made.
// Prevents issues where an old token is sent if the user logs in or out.
// More maintainable and scalable approach for handling authentication headers.

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});





// Update the user's Profile

export const ProfileUpdate = (formData) => {
    return api.put("/users/profile", formData);
}


// Get all the info of the patient role

export const GetPatientInfo = ()=>{
    return api.get("/admin/patients")
}
