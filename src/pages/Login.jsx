import "../assets/styles/Login.css";
const Login = () => {
  return (
    <>
      <div className="loginContainer">
        <h1 className="loginHeading">Login</h1>
        <div className="loginDetail">
          <input type="email" name="" id="" placeholder="Enter Your Email" />
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter Your Password"
          />
          <button className="loginBtn" type="submit">
            LOGIN
          </button>
          <p className="not-a-user">
            Not a user? <a href="signup">Register Here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
