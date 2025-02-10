import DoctorCards from "../components/DoctorCards";
import Footer from "../components/Footer";

const Doctors = () => {
  return (
    <>
      <div className="doctorContainer">
        <div className="doctorHeading">
          <h1 className="page-heading" style={{margin:"33px 0px"}}>Our Doctors</h1>
        </div>
        <div className="Dcards">
          <DoctorCards />
          <DoctorCards />
          <DoctorCards />
          <DoctorCards />
          <DoctorCards />
          <DoctorCards />
          <DoctorCards />
          <DoctorCards />
          <DoctorCards />
          <DoctorCards />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Doctors;
