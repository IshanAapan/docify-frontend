import "../assets/styles/Home.css";
import homeImage from "../assets/images/Home.jpg";
import "../assets/styles/AboutUS.css";
import aboutImage from "../assets/images/AboutUS.jpg";
import "../assets/styles/ContactUS.css";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
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
          <div className="heading">
            <h1 className="form-heading">Contact Us</h1>
          </div>
          <div className="form-fields">
            <input type="text" placeholder="Enter Your Name"></input>
            <input type="text" placeholder="Enter Yout Email"></input>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Your Message..."
              className="contact-us-textarea"
            ></textarea>
            <button className="contactus-btn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
