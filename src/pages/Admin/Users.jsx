import "../../assets/styles/global.css"
import { useEffect, useState } from 'react';
import { GetPatientInfo } from '../../services/UserService';

import AdminTable from "./AdminTable"
const Users = () => {


  const [data, setData] = useState([]);


  const getPatientInfo = async () => {
    try {
      const resp = await GetPatientInfo();
      console.log("data", resp);

      setData(resp?.data?.patients || [])  // Prevents undefined errors

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPatientInfo()
  }, [])




  return (
    <>
      <AdminTable tableName="User" data={data} setData={setData} />
    </>
  );
};

export default Users;
