import "../assets/styles/Home.css";
import homeImage from "../assets/images/Home.jpg";
import "../assets/styles/AboutUS.css";
import aboutImage from "../assets/images/AboutUS.jpg";
import "../assets/styles/ContactUS.css";
import Footer from "../components/Footer";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import NavBar from "../components/NavBar";

const Home = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    msg: "",
  });

  const handleInputField = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const token = localStorage.getItem("token");
  console.log("tokenContact us", token);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("FormData", formData);
    const { fullName, email, msg } = formData;
    if (!token) {
      toast.error("You Must Login first");
    } else if (!fullName || !email || !msg) {
      toast.error("All the fields are required!");
    } else if (fullName.length < 3) {
      toast.error("Name length should be at least 3");
    } else if (msg.length < 10) {
      toast.error("Message should be long");
    } else {
      toast.success("Form Submitted Successfully!");
    }
  };

  return (
    <>
      <NavBar />
      <section className="container" id="home">
        <section className="leftHomeHeading">
          <h1 className="page-heading">Your Health,</h1>
          <h1 className="page-heading">Our Responsibility</h1>
          <p className="leftHomeText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ipsum
            praesentium sequi iste, labore maxime dolore excepturi quos
            provident! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Modi ipsum praesentium sequi iste, labore maxime dolore excepturi
            quos provident! Sunt!
          </p>
        </section>
        <section>
          <div className="home-img">
            <img src={homeImage} alt="Home Image" />
          </div>
        </section>
      </section>

      {/* About Us Section */}
      <section id="aboutus" className="aboutContainer">
        <div className="heading">
          <h1 className="page-heading">About Us</h1>
        </div>
        <div className="about-container">
          <img className="aboutImage" src={aboutImage} alt="About Us" />
          <p className="leftHomeText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ipsum
            praesentium sequi iste, labore maxime dolore excepturi quos
            provident! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Modi ipsum praesentium sequi iste, labore maxime dolore excepturi
            quos provident! Sunt!
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contactus">
        <div className="contactus-container">
          <form onSubmit={handleSubmit}>
            <div className="heading">
              <h1 className="form-heading">Contact Us</h1>
            </div>
            <div className="form-fields">
              <input
                type="text"
                value={formData.fullName}
                placeholder="Full Name"
                name="fullName"
                onChange={handleInputField}
              ></input>
              <input
                type="email"
                value={formData.email}
                placeholder="email@gmail.com"
                name="email"
                onChange={handleInputField}
              ></input>
              <textarea
                name="msg"
                value={formData.msg}
                id=""
                cols="30"
                rows="10"
                placeholder="Enter Your Message..."
                className="contact-us-textarea"
                onChange={handleInputField}
              ></textarea>
              <button className="contactus-btn" type="Submit">
                Submit
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
