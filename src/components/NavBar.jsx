
import { NavLink, useNavigate } from "react-router-dom";
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

  const handleNavClick = (sectionId) => {
    navigate("/", { state: { scrollTo: sectionId } });
    setIconActive(false);
  };

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return (
    <header>
      <nav className={iconActive ? "nav-active" : ""}>
        <h2 className="nav-logo">
          <NavLink to="/">Docify</NavLink>
        </h2>

        <ul className="nav-links">
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
