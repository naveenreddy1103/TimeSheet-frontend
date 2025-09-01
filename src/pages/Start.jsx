import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import './form.css'



export default function EntryPage() {
  
  
  return (
    <div className="start">
      <Navbar />
      <div className="admin container-fluid  d-flex justify-content-center align-items-center " style={{height:"90vh"}}>
         <div>
            <Link to='/user/auth'><button className="btn btn-primary mx-2 p-3">User Authentication</button></Link>
            <Link to='/admin/auth'><button className="btn btn-warning mx-2 p-3">Admin Authentication</button></Link>
         </div>
    </div>
    </div>
  );
}
