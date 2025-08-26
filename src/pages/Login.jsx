import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './form.css'
import Cookies from "js-cookie";


const api = import.meta.env.VITE_API_BASE_URL;

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  function formChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const formsubmit = async (e) => {
  e.preventDefault();
  try {
     await axios.post(`${api}/user/login`, data, {
      withCredentials: true, // if using cookies
    }).then((response)=>{
        Cookies.set('token',response.data.token)
        Cookies.set('userName',response.data.userName)
        Cookies.set('userId',response.data.id)
        console.log(response.data)
        alert(`${response.data.userName} logged in successfully`);
      navigate('/user/dashboard')
      setData({ email: "", password: "" });
    }).catch(err=>{
       alert(response.data.message || "Login failed.");
    })

   
  } catch (error) {
    console.error("Login error:", error);
    alert("Login failed. Please check your credentials.");
  }
};

  return (
    <div className="main">
      <form className="mt-3 p-5 rounded bg-white text-black" onSubmit={formsubmit}>
        <h3 className="bi bi-person-fill"> User Login</h3>
        <dl>
          <dt>Email</dt>
          <dd>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              onChange={formChange}
              value={data.email}
              required
            />
          </dd>
          <dt>Password</dt>
          <dd>
            <input
              type="string"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={formChange}
              value={data.password}
              required
            />
          </dd>
        </dl>
        <input type="submit" className="btn btn-primary w-100" value="Login" />
        <div className="mt-2 text-center">
          <Link to="/register" className="small">Need an account? Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
