import { useEffect, useState } from "react"
import AdminTable from "./AdminTable"
import { getDoctors } from "../../services/Doctor";

const Doctors = () => {

    const [data, setData] = useState([]);

    const getDoc = async () => {
        try {
            const resp = await getDoctors();
            console.log("resp", resp);
            setData(resp.data)

        } catch (error) {
            console.log("Unable to get all the doctor data", error);

        }

    }

    useEffect(() => {
        getDoc();
    }, [])

    return (
        <>
            <AdminTable tableName="Doctors" data={data} setData={setData} />
        </>
    )
}

export default Doctors
