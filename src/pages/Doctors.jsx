import DoctorCards from "../components/DoctorCards";
import Footer from "../components/Footer";

const Doctors = () => {
  return (
    <>
      <div className="doctorContainer">
        <div className="doctorHeading">
          <h1>Our Doctors</h1>
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
