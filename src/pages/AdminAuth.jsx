import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import './form.css'


export default function AdminAuth() {
  
  return (
    <div id="admin">
      <Navbar />
      <div className=" container-fluid  d-flex justify-content-center align-items-center " style={{height:"90vh"}}>
         <div>
            <Link to='/admin/register'><button className="btn btn-primary mx-2">Register</button></Link>
            <Link to='/admin/login'><button className="btn btn-warning mx-2">Login</button></Link>
         </div>
    </div>
    </div>
  );
}
