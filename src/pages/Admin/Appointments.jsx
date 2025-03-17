import { useEffect, useState } from "react"
import AdminTable from "./AdminTable"
import { getAdminAppointments } from "../../services/AppointmentServices"
import { ClipLoader } from "react-spinners";

const Appointments = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAdminAppoint = async () => {
        try {
            const resp = await getAdminAppointments();
            console.log("resp", resp.data);

            setData(resp.data)
        } catch (error) {
            console.log("Error", error);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAdminAppoint();
    }, [])

    return (
        <>
            {loading ? (

                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    zIndex: 9999,
                }}>
                    <ClipLoader color="#36D7B7" size={60} />
                </div>
            ) : (
                <AdminTable tableName="Appointments" data={data} />
            )}
        </>
    )
}

export default Appointments
