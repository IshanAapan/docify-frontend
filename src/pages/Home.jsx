import "../assets/styles/Home.css";
import homeImage from "../assets/images/Home.jpg";
import "../assets/styles/AboutUS.css";
import aboutImage from "../assets/images/AboutUS.jpg";
import "../assets/styles/ContactUS.css";
import Button from "../components/Button";
import Input from "../components/Input";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <section className="container" id="home">
        <section className="leftHomeHeading">
          <h1>Your Health,</h1>
          <h1>Our Responsibility</h1>
          <p className="leftHomeText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ipsum
            praesentium sequi iste, labore maxime dolore excepturi quos
            provident! Sunt!
          </p>
        </section>
        <section>
          <div className="home-img">
            <img src={homeImage} alt="Home Image" />
          </div>
        </section>
      </section>

      {/* About Us Section */}
      <section id="aboutus">
        <div className="heading">
          <h1 className="aboutUS">About Us</h1>
        </div>
        <div className="about-container">
          <img src={aboutImage} alt="About Us" />
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
            <h1 className="contactUS">Contact Us</h1>
          </div>
          <div className="form-fields">
            <Input />
            <Input />
            <Input />
            <Button />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
