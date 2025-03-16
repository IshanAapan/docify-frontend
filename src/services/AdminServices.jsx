import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5000/api/admin"
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



// all the user, who apply for the doctor
export const getPendingApp = () => {
    return api.get("/applications/pending")
}


// approve the doctor request by the admin

export const statusUpdate = (id, status) => {
    return api.patch(`/applications/${id}/status`, { status })
}


export const deleteUser = (id) => {
    return api.delete(`/patients/${id}`)
}


export const deleteDoctor = (doctorId) => {
    return api.delete(`/doctors/${doctorId}`);
};


// export const changeDoctorRole = (doctorId) => {
//     return api.patch(`/doctors/${doctorId}/change-role`, { role: "Patient" });
// };
