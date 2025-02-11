import Footer from "../components/Footer";
import "../assets/styles/ApplyForDoctor.css";
const ApplyForDoctor = () => {
  return (
    <>
      <section className="ApplyDoctorContainer">
        <div className="heading">
          <h1 className="form-heading">Apply For Doctor</h1>
        </div>
        <div className="form-fields">
          <input type="text" placeholder="Enter Your Specialization"></input>
          <input
            type="number"
            placeholder="Enter Your Experience (in Years)"
          ></input>
          <input type="number" placeholder="Enter Your Fees"></input>
          <input type="tel" placeholder="Enter Your Contact Number"></input>
          <button className="apply-btn" type="submit">
            APPLY
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default ApplyForDoctor;
