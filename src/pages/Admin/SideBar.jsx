import { FaUsers } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaList } from "react-icons/fa";
import { LuMessageSquareCode } from "react-icons/lu";
// import { FaUserAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import "../../assets/styles/SideBar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const SideBar = () => {

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role")
    navigate("/login")

  }

  return (
    <div className="sideBarContainer">
      <div className="sideBarContent">
        <NavLink to="/dashboard/users" className="user flex">
          <FaUsers />
          <h5>Users</h5>
        </NavLink>
        <NavLink to="/dashboard/doctors" className="doctor flex">
          <FaUserDoctor />
          <h5>Doctors</h5>
        </NavLink>
        <NavLink to="/dashboard/appointments" className="appointments flex">
          <FaList />
          <h5>Appointments</h5>
        </NavLink>
        <NavLink to="/dashboard/applications" className="applications flex">
          <LuMessageSquareCode />
          <h5>Applications</h5>
        </NavLink>
        {/* <div className="profile flex">
          <FaUserAlt />
          <h5>Profile</h5>
        </div> */}
        <div className="logout flex logOutBtn" onClick={handleLogOut}>
          <CiLogout />
          <h5>Log Out</h5>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
