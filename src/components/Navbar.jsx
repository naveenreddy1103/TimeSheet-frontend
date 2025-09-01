import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "./navbar.css"
import { API } from "../utils/constants";

// const api = import.meta.env.VITE_API_BASE_URL


export default function Navbar() {
  const nav = useNavigate();
  const location = useLocation();

  const logout = async () => {
    try {
      await axios.get(API+`/user/logout`)
      .then(()=>{
        Cookies.remove('token')
        nav('/login')
      })
    } catch (e) {
      nav("/login");
    }
  };

  return (
    
      <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container">
        <Link className="navbar-brand" to="/user/dashboard">Timesheets</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav"
          aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li> */}
            <li className="nav-item"><Link className="nav-link" to="/admin/dashboard">Admin</Link></li>
          </ul>
          <div className="d-flex gap-2">
            <Link className="btn btn-outline-primary btn-sm" to="/login">Login</Link>
            <Link className="btn btn-primary btn-sm" to="/register">Register</Link>
            <button className="btn btn-outline-danger btn-sm" onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
    
  );
}
