import { useState } from "react";
import "../assets/styles/Register.css";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    file: "",
    password: "",
    cpassword: "",
  });

  const handleInputField = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FormData", formData);
    const { firstName, lastName, email, password, cpassword, file } = formData;
    if (!firstName || !lastName || !email || !password || !cpassword || !file) {
      toast.error("All fields are required");
    } else if (firstName.length < 3) {
      toast.error("First Name should be long");
    } else if (lastName.length < 3) {
      toast.error("First Name should be long");
    } else if (password.length < 8) {
      toast.error("Password's length should be at least 8 characters");
    } else if (password !== cpassword) {
      toast.error("Invalid Password");
    } else {
      toast.success("Form Submitted Successfully!");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="registerContainer">
          <h1 className="registerHeading">Sign Up</h1>
          <div className="registerInfo">
            <input
              type="text"
              name="firstName"
              id=""
              placeholder="Enter Your First Name"
              onChange={handleInputField}
            />
            <input
              type="text"
              name="lastName"
              id=""
              placeholder="Enter Your Last Name"
              onChange={handleInputField}
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email"
              onChange={handleInputField}
            />
            <input
              type="file"
              name="file"
              id=""
              placeholder="photo"
              onChange={handleInputField}
            />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Enter Your Password"
              onChange={handleInputField}
            />
            <input
              type="password"
              name="cpassword"
              id=""
              placeholder="Confirm Your Password"
              onChange={handleInputField}
            />
            <button className="register-btn" type="submit">
              SIGN UP
            </button>
            <p className="already-a-user">
              Already a user? <a href="./Login.jsx">Login Here</a>
            </p>
            <ToastContainer />
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
