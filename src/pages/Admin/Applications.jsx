import { useEffect, useState } from "react"
import AdminTable from "./AdminTable"
import { getPendingApp } from "../../services/AdminServices"
import { ClipLoader } from "react-spinners";

const Applications = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const handlePendingApplication = async () => {
        try {

            const resp = await getPendingApp();
            console.log("resp", resp.data);
            setData(resp.data)

        } catch (error) {
            console.log("Pending Application data error occured", error);

        }
        finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        handlePendingApplication();
    }, [])

    return (<>
        {loading ?
            (<div style={{
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
            </div>) :
            (<div>
                <AdminTable tableName="Applications" data={data} setData={setData} />
            </div>)
        }
    </>
    )
}

export default Applications
