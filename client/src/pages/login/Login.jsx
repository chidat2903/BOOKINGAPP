import { useContext, useState } from "react";
import './login.css';
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from '../../public/image/wallpa.webp';
import img1 from '../../public/image/blue.svg';
import { Link } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const {  loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <div className="login">
      <div className="lContainer">
        <div className="">
          <img src={img} className="background-image" alt="hinh nen"/>
          <div className="svg">
              <img src={img1} className="img-logo" alt="svg" />
              <p className="img-logo2">Lamabooking</p>
          </div>
          <p className="hero-text">From Southeast Asia to the
              World, All Yours</p>
          <div className="custom-back-button">
              <i className="icon-chevron-left"></i>
              <p className="homepage-link">Go to Traveloka Homepage</p>
              <div className="custom-popup">
                  <p className="login-register-title">Log In</p>
                  <input
                    type="text"
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                    className="custom-input"
                  />
                  <br />
                  <input
                    type="password"
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                    className="custom-input"
                  />
                     
                  <button disabled={loading} onClick={handleClick} className="custom-button">
                    Login
                  </button>
                  {error && <span className="error">{error.message}</span>}
                  <div className="l-or-r">
                      <hr className="hr " />
                      <p className="p">Do not have an account ? <Link to="/register">register</Link></p>
                    </div>
                  <div className="custom-element">
                      <p className="custom-text1"> By registering, you agree to our
                          <a href="l" className="custom-text">Terms & Conditions</a>
                          <span className="custom-text1">and that you have read our</span>
                          <a href="l" className="custom-text">Privacy Notice.</a>
                      </p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
