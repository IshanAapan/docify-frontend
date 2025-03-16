import { useState } from "react";
import "../assets/styles/Login.css";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { loginU } from "../services/AuthServices";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { fetchData, setFetchData } = useContext(AuthContext);

  const handleInputField = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("FormData", formData);
    const { email, password } = formData;

    if (!email || !password) {
      toast.error("All fields are required");
    } else if (password.length < 8) {
      toast.error("Invalid Password!");
    } else {
      login(formData);
    }
  };
  console.log("fetchData", fetchData);


  const login = async (formData) => {
    try {
      const resp = await loginU(formData);
      console.log("resp", resp);
      const token = resp.data.token;
      localStorage.setItem("token", token);
      const role = resp.data.user.role;
      localStorage.setItem("role", role)
      setFetchData(resp.data.user)
      // navigate("/")
      if (role === "admin") {
        navigate("/dashboard/users", {replace:true});
      }
      else{
        navigate("/")
      }
    } catch (error) {
      console.log(error);
      if (error.status) {
        toast.error("Unable to Login");
      }
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
              Not a user? <Link to="/signup">Register Here</Link>
            </p>
            <ToastContainer />
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
