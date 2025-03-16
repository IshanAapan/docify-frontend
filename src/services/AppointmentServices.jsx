import axios from "axios"

const api = axios.create({ baseURL: "http://localhost:5000/api/appointments" })


api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});


// Patient books appointment
export const bookAppointment = (formData, doctor) => {
    console.log("In services",formData,doctor.id);
    return api.post("/", { ...formData, doctorId: doctor.id })
}


// Doctor views appointments
export const getDoctorAppointments = () => {
    return api.get("/doctor")
}


// Doctor updates status

export const updateStatus = (id, status) => {

    console.log("elem", id, "status", status);
    return api.patch(`/${id}/status`, { status })
}


// Patient views appointments

export const getPatientAppointments = () => {
    return api.get("/patient")
}


// Admin views all appointments

export const getAdminAppointments=()=>{
    return api.get("/admin")
}
