import "../assets/styles/Register.css";

const Register = () => {
  return (
    <>
      <div className="registerContainer">
        <h1 className="registerHeading">Sign Up</h1>
        <div className="registerInfo">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Your First Name"
          />
          <input type="text" name="" id="" placeholder="Enter Your Last Name" />
          <input type="text" name="" id="" placeholder="Enter Your Email" />
          <input type="text" name="" id="" placeholder="photo" />
          <input type="text" name="" id="" placeholder="Enter Your Password" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Confirm Your Password"
          />
          <button className="register-btn" type="submit">
            SIGN UP
          </button>
          <p className="already-a-user">
            Already a user? <a href="login">Login Here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
