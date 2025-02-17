import Footer from "../components/Footer";
import "../assets/styles/Appointments.css";
import Table from "../components/Table";
import NavBar from "../components/NavBar";

const Appointments = () => {
  return (
    <>
      <NavBar />
      <div className="appointmentContainer">
        <h1 className="appointment-page-heading">Your Appointments</h1>
        <div className="table">
          <Table />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Appointments;
