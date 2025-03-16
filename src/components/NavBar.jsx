import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import "../assets/styles/NavBar.css";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
  const navigate = useNavigate();
  const [iconActive, setIconActive] = useState(false);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
    window.location.reload();
  };

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  // console.log("token", token);

  return (
    <header>
      <nav className={iconActive ? "nav-active" : ""}>
        <h2 className="nav-logo">
          <NavLink to="/">Docify</NavLink>
        </h2>

        <ul className="nav-links">
          <li>
            <Link to="home">Home</Link>
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
              {role == "patient" && (
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
            <Link to="aboutus" smooth={true} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="contactus" smooth={true} duration={500}>
              Contact Us
            </Link>
          </li>
          {token && (
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          )}
          {token ? (
            <button type="button" onClick={handleLogout}>
              LOGOUT
            </button>
          ) : (
            <button type="button" onClick={handleLogin}>
              LOGIN
            </button>
          )}
        </ul>
      </nav>
      <div className="menu-icons">
        {!iconActive && (
          <FiMenu className="menu-open" onClick={() => setIconActive(true)} />
        )}
        {iconActive && (
          <RxCross1
            className="menu-close"
            onClick={() => setIconActive(false)}
          />
        )}
      </div>
    </header>
  );
};

export default NavBar;
