import { useEffect, useState } from "react"
import AdminTable from "./AdminTable"
import { getAdminAppointments } from "../../services/AppointmentServices"

const Appointments = () => {

    const [data, setData] = useState([]);
    const getAdminAppoint = async () => {
        try {
            const resp = await getAdminAppointments();
            console.log("resp",resp.data);
            
            setData(resp.data)
        } catch (error) {
            console.log("Error", error);

        }
    }

    useEffect(() => {
        getAdminAppoint();
    }, [])

    return (
        <AdminTable tableName="Appointments" data={data}  />
    )
}

export default Appointments
