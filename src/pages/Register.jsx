import { useState } from "react";
import "../assets/styles/Register.css";
// import "../assets/styles/Profile.css"
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../services/AuthServices";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mob: "",
    age: "",
    gender: "",
    address: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();

  const handleInputField = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("FormData", formData);
    const { firstName,
      lastName,
      email,
      mob,
      age,
      gender,
      address,
      password,
      cpassword, } = formData;
    if (!firstName ||
      !lastName ||
      !email ||
      !mob ||
      !age ||
      !gender ||
      !address ||
      !password ||
      !cpassword) {
      toast.error("All fields are required");
    } else if (firstName.length < 3) {
      toast.error("Fist Name Should long");
    } else if (lastName.length < 3) {
      toast.error("Last Name Should long");
    } else if (mob.length > 10 || mob.length < 10) {
      toast.error("Invalid contact number");
    } else if (age < 1) {
      toast.error("Invalid age");
    } else if (password.length < 8) {
      toast.error("Password should be at least 8 Characters");
    } else if (password !== cpassword) {
      toast.error("Password and Confirm Password does'not match");
    } else {
      register(formData);
    }
  };

  const register = async (formData) => {
    try {
      const resp = await signUp(formData);
      console.log("resp", resp);
      if (resp.status) {
        toast.success("Form has been Submitted Successfully");
      }
      navigate("/login");
    } catch (error) {
      console.error(error.message);
      if (error.status) {
        toast.error("Something Went Wrong");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="profileContainer">
          <h1 className="profileHeading" style={{ marginBottom: "2rem" }}>Sign Up</h1>
          <div className="profileDetails">
            <div className="name input-flex">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleInputField}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleInputField}
              />
            </div>
            <div className="contactInfo input-flex">
              <input
                type="email"
                placeholder="email@gmail.com"
                name="email"
                onChange={handleInputField}
              />
              <input
                type="tel"
                placeholder="Contact Number"
                name="mob"
                onChange={handleInputField}
              />
            </div>
            <div className="genInfo input-flex">
              <input
                type="number"
                placeholder="Age"
                name="age"
                onChange={handleInputField}
              />
              {/* <input type="number" placeholder="Enter Your Age"/> */}
              <select name="gender" id="genderId" onChange={handleInputField}>
                <option value="Prefer not to say">Prefer not to say</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="profileAddress input-flex">
              <textarea
                name="address"
                rows="10"
                cols="120"
                placeholder="Enter Your Permanent Address..."
                id=""
                onChange={handleInputField}
              ></textarea>
            </div>
            <div className="password input-flex">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleInputField}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                name="cpassword"
                onChange={handleInputField}
              />
            </div>

            <button type="submit" className="profile-btn">
              SIGN UP
            </button>
            <p className="already-a-user">
              Already a user? <Link to="/login">Login Here</Link>
            </p>
            <ToastContainer />
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
