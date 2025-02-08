import Footer from "../components/Footer";
import Input from "../components/Input";
import "../assets/styles/ApplyForDoctor.css";
import Button from "../components/Button";
const ApplyForDoctor = () => {
  return (
    <>
      <seciton className="ApplyDoctorContainer">
        <div className="heading">
          <h1>Apply for Doctors</h1>
        </div>
        <div className="specialization">
          <Input />
        </div>
        <div className="experience">
          <Input />
        </div>
        <div className="fees">
          <Input />
        </div>
        <div className="mob">
          <Input />
        </div>
        <Button />
      </seciton>
      <Footer />
    </>
  );
};
export default ApplyForDoctor;
