import Footer from "../components/Footer";
import "../assets/styles/Appointments.css";
import Table from "../components/Table";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { getDoctorAppointments, getPatientAppointments } from "../services/AppointmentServices";
import { ClipLoader } from "react-spinners";

const Appointments = () => {

  const role = localStorage.getItem("role");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDocAppointments();
  }, []);


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
      )}
    </>
  );
};
export default Appointments;
