import Footer from "../components/Footer";
import "../assets/styles/ApplyForDoctor.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import NavBar from "../components/NavBar";
import { applyForDoctor } from "../services/Doctor";
const ApplyForDoctor = () => {
  const [formData, setFormData] = useState({
    specialization: "",
    experience: "",
    fees: "",
    contactNumber: "",
  });
  const handleInputField = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FormData", formData);
    const { specialization, experience, fees, contactNumber } = formData;
    if (!specialization || !experience || !fees || !contactNumber) {
      toast.error("All Fields are required");
    } else if (specialization.length < 3) {
      toast.error("Specialization should be at least 3 letter");
    } else if (experience <= 0) {
      toast.error("Experience should be at least 1 year");
    } else if (fees <= 0) {
      toast.error("Fess should be greater than 0");
    } else if (contactNumber.length < 10 || contactNumber.length > 10) {
      toast.error("Invalid Contact Number");
    } else {
      handleApplyForDoctor(formData)
    }
  };


  const handleApplyForDoctor = async (formData) => {
    try {
      const resp = await applyForDoctor(formData);
      console.log("Apply for Doctor resp", resp);
      setFormData({
        specialization: "",
        experience: "",
        fees: "",
        contactNumber: "",
      })
      toast.success("Application Submitted Successfully!");

    } catch (error) {
      if (error !== 201) {
        setFormData({
          specialization: "",
          experience: "",
          fees: "",
          contactNumber: "",
        })
        toast.error("User unable to Apply for a Doctor")
      }
      if (error === 404) {
        setFormData({
          specialization: "",
          experience: "",
          fees: "",
          contactNumber: "",
        })
        toast.error("User Not found")
      }

    }
  }

  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <section className="ApplyDoctorContainer">
          <div className="heading">
            <h1 className="form-heading">Apply For Doctor</h1>
          </div>
          <div className="form-fields">
            <input
              type="text"
              placeholder="Enter Your Specialization"
              name="specialization"
              onChange={handleInputField}
            ></input>
            <input
              type="number"
              placeholder="Enter Your Experience (in Years)"
              name="experience"
              onChange={handleInputField}
            ></input>
            <input
              type="number"
              placeholder="Enter Your Fees"
              name="fees"
              onChange={handleInputField}
            ></input>
            <input
              type="tel"
              placeholder="Enter Your Contact Number"
              name="contactNumber"
              onChange={handleInputField}
            ></input>
            <button className="apply-btn" type="submit">
              APPLY
            </button>
            <ToastContainer />
          </div>
        </section>
      </form>
      <Footer />
    </>
  );
};
export default ApplyForDoctor;
