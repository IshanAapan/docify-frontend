import { useEffect, useState } from "react"
import AdminTable from "./AdminTable"
import { getDoctors } from "../../services/Doctor";
import { ClipLoader } from "react-spinners";

const Doctors = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getDoc = async () => {
        try {
            const resp = await getDoctors();
            console.log("resp", resp);
            setData(resp.data)

        } catch (error) {
            console.log("Unable to get all the doctor data", error);
        }
        finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        getDoc();
    }, [])

    return (
        <>
            {loading ? (<div style={{
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
            }}><ClipLoader color="#36D7B7" size={60} />
            </div>)
                : (
                    <AdminTable tableName="Doctors" data={data} setData={setData} />)}
        </>
    )
}

export default Doctors
