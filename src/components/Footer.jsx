import { NavLink, useNavigate } from "react-router";
import "../assets/styles/Footer.css";
import { Link } from "react-scroll";


const Footer = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role")

const navigate = useNavigate();
  // const [iconActive, setIconActive] = useState(false);
  const handleNavClick = (sectionId) => {
    navigate("/", { state: { scrollTo: sectionId } });
    // setIconActive(false);
  };
  
  return (
    <div
      className="footer-container
    "
    >
      <section className="company-name-section">
        <div className="company-name">
          <h2 className="heading">Docify</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ipsam,
          architecto, tempore enim quisquam deleniti harum voluptate, blanditiis
          voluptatem molestias rerum laboriosam corrupti voluptates nulla minus
          praesentium quod.
        </p>
      </section>
      <section>
        <div className="company-pages">
          <h4 className="links heading">LINKS</h4>
          <ul className="footer-links">
            <li>
               <a onClick={() => handleNavClick("home")} style={{ cursor: "pointer" }}>
                Home
              </a>
            </li>
            {role !== "doctor" && (
              <li>
                <NavLink to="/doctors">Doctors</NavLink>
              </li>
            )}
            {token && (
              <>
                <li>
                  <NavLink to="/appointments">Appointments</NavLink>
                </li>
                {role === "patient" && (
                  <li>
                    <NavLink to="/applyfordoctor">Apply for Doctor</NavLink>
                  </li>
                )}
                {role === "admin" && (
                  <li>
                    <NavLink to="/dashboard/users">DashBoard</NavLink>
                  </li>
                )}
              </>
            )}
           <li>
              <a onClick={() => handleNavClick("aboutus")} style={{ cursor: "pointer" }}>
                About Us
              </a>
            </li>
            <li>
              <a onClick={() => handleNavClick("contactus")} style={{ cursor: "pointer" }}>
                Contact Us
              </a>
            </li>
            {token && (
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
            )}
          </ul>
        </div>
      </section>
      <section className="g-i-touch">
        <div className="get-in-touch heading">GET IN TOUCH</div>
        <div className="contact-info">
          <h4 className="contact-no">+9876543217</h4>
        </div>
        <div className="email">
          <h4 className="emailHeading">docify@gmail.com</h4>
        </div>
      </section>
    </div>
  );
};

export default Footer;
