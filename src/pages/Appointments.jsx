import Footer from "../components/Footer";
import "../assets/styles/Appointments.css";
import Table from "../components/Table";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { getDoctorAppointments, getPatientAppointments } from "../services/AppointmentServices";

const Appointments = () => {

  const role = localStorage.getItem("role");
  const [data, setData] = useState([]);

  const getDocAppointments = async () => {
    try {
      let resp;
      if (role === "doctor") {
        resp = await getDoctorAppointments();
      }
      else if (role === "patient") {
        resp = await getPatientAppointments();
      }
      console.log("doc-resp", resp.data);
      if (resp && resp.data) {
        // console.log("resp",resp);
        
        setData(resp.data)
      }

    } catch (error) {
      console.log("error", error);

    }
  }

  useEffect(() => {
    getDocAppointments();
  }, []);


  return (
    <>
      <NavBar />
      <div className="appointmentContainer">
        <h1 className="appointment-page-heading">Your Appointments</h1>
        <div className="table">
          <Table data={data} />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Appointments;
