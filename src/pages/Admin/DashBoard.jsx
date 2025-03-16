import PropTypes from "prop-types";
import SideBar from "./SideBar";
import "../../assets/styles/Dashboard.css";
import Users from "../Admin/Users";
import Doctors from "../Admin/Doctors";
import Appointments from "../Admin/Appointments";
import Applications from "../Admin/Applications";
const DashBoard = ({ type }) => {
  return (
    <div className="dashboardContainer">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="rightSide">
        {type === "users" ? (
          <Users />
        ) : type === "Doctors" ? (
          <Doctors />
        ) : type === "Appointments" ? (
          <Appointments />
        ) : type === "Applications" ? (
          <Applications />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
DashBoard.propTypes = {
  type: PropTypes.string.isRequired,
};

export default DashBoard;
