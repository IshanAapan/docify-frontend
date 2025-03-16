import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export const Public = ({ children }) => {

  const token = localStorage.getItem("token");
  if (!token) {
    return children;
  }
  return <Navigate to={"/"} replace={true}></Navigate>;
};

export const Protected = ({ children }) => {

  const token = localStorage.getItem("token");

  if (token) {
    return children;
  }
  return <Navigate to={"/"} replace={true}></Navigate>;
};

export const Admin = ({ children }) => {

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (token && role === "admin") {
    return children;
  }
  return <Navigate to={"/"} replace={true}></Navigate>
}

Admin.propTypes = {
  children: PropTypes.node.isRequired,
};

Public.propTypes = {
  children: PropTypes.node.isRequired,
};

Protected.propTypes = {
  children: PropTypes.node.isRequired,
};
