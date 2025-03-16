import { useEffect, useState } from "react"
import AdminTable from "./AdminTable"
import { getPendingApp } from "../../services/AdminServices"

const Applications = () => {

    const [data, setData] = useState([]);

    const handlePendingApplication = async () => {
        try {

            const resp = await getPendingApp();
            console.log("resp", resp.data);
            setData(resp.data)

        } catch (error) {
            console.log("Pending Application data error occured", error);

        }

    }

    useEffect(() => {
        handlePendingApplication();
    }, [])

    return (
        <div>
            <AdminTable tableName="Applications" data={data} setData={setData}/>
        </div>
    )
}

export default Applications
