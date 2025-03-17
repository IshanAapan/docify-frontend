import "../../assets/styles/global.css"
import { useEffect, useState } from 'react';
import { GetPatientInfo } from '../../services/UserService';

import AdminTable from "./AdminTable"
import { ClipLoader } from "react-spinners";
const Users = () => {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPatientInfo = async () => {
    try {
      const resp = await GetPatientInfo();
      console.log("data", resp);

      setData(resp?.data?.patients || [])  // Prevents undefined errors

    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPatientInfo()
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
        <AdminTable tableName="User" data={data} setData={setData} />
      )}
    </>
  );
};

export default Users;
