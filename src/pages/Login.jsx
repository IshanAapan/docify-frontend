import { useState } from "react";
import "../assets/styles/Login.css";
import { toast, ToastContainer } from "react-toastify";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputField = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FormData", formData);
    const { email, password } = formData;

    if (!email || !password) {
      toast.error("All fields are required");
    } else if (password.length < 8) {
      toast.error("Invalid Password!");
    } else {
      toast.success("Form Submitted Successfully!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="loginContainer">
          <h1 className="loginHeading">Login</h1>
          <div className="loginDetail">
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email"
              onChange={handleInputField}
            />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Enter Your Password"
              onChange={handleInputField}
            />
            <button className="loginBtn" type="submit">
              LOGIN
            </button>
            <p className="not-a-user">
              Not a user? <a href="./Register.jsx">Register Here</a>
            </p>
            <ToastContainer />
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
