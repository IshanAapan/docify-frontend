import Table from "../components/Table";
import "../assets/styles/Table.css";
import NavBar from "../components/NavBar";
const DoctorApprove = () => {
  return (
    <div className="DocApproveContainer">
      <NavBar />
      <h1>Doctors side Appointment</h1>
      <Table />
    </div>
  );
};

export default DoctorApprove;
