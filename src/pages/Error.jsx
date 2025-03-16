import { NavLink } from "react-router-dom";
import "../assets/styles/global.css";
import "../assets/styles/Error.css";
const Error = () => {
  return (
    <div
      className="errorContainer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>OOhh!Page Not found 404</h1>
      <p className="para">Back to Home Page</p>
      <NavLink to={"/"}>Click here</NavLink>
    </div>
  );
};

export default Error;
