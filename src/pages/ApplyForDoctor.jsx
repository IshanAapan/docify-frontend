import Footer from "../components/Footer";
import "../assets/styles/ApplyForDoctor.css";
const ApplyForDoctor = () => {
  return (
    <>
      <seciton className="ApplyDoctorContainer">
        <div className="heading">
          <h1 className="form-heading">Apply for Doctors</h1>
        </div>
        <div className="specialization">
          <input type="text" placeholder="Enter Your Specialization"></input>
        </div>
        <div className="experience">
          <input type="number" placeholder="Enter Your Experience (in Years)"></input>
        </div>
        <div className="fees">
          <input type="number" placeholder="Enter Your Fees"></input>
        </div>
        <div className="mob">
          <input type="tel" placeholder="Enter Your Contact Number"></input>
        </div>
        <button className="applydocBtn" type="button">APPLY</button>
      </seciton>
      <Footer />
    </>
  );
};
export default ApplyForDoctor;
