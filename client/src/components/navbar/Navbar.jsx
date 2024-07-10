import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Lamabooking</span>
        </Link>
        {user ? (
          <span className="navUsername">{user.username}</span>
        ) : (
          <div className="navItems">
            <Link to="/register" style={{ color: "inherit", textDecoration: "none" }}><button className="navButton"><b>Register</b></button></Link>
            <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}><button className="navButton"><b>Login</b></button></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
