import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "../assets/styles/NavBar.css";
import Button from "./Button";

const NavBar = () => {
  return (
    <header>
      <nav>
        <h2 className="nav-logo">
          <NavLink to="/">Docify</NavLink>
        </h2>

        <ul className="nav-links">
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <NavLink to="/doctors">Doctors</NavLink>
          </li>
          <li>
            <NavLink to="/appointments">Appointments</NavLink>
          </li>
          <li>
            <NavLink to="/applyfordoctor">Apply for Doctor</NavLink>
          </li>
          <li>
            <Link to="aboutus" smooth={true} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="contactus" smooth={true} duration={500}>
              Contact Us
            </Link>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <Button />
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
