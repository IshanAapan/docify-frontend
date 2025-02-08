import Footer from "../components/Footer";
import "../assets/styles/Appointments.css";
import Table from "../components/Table";

const Appointments = () => {
  return (
    <>
      <div className="appointmentContainer">
        <h1 className="appointmentsHeading">Your Appointments</h1>
        <div className="table">
          <Table />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Appointments;
