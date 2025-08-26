import { useState, useEffect } from "react";
import axios from "axios";
import './form.css'
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


const api=import.meta.env.VITE_API_BASE_URL

export default function AddTimeSheet() {
    const userId=Cookies.get('userId')
    const navigate=useNavigate()
    const [formData,setFormData]=useState({userId:userId,date:'',project:'',hoursWorked:0,notes:''})
    const formChange=(e)=>{
         setFormData({...formData,[e.target.name]:e.target.value})
    }

    
  
const submit=async(e)=>{
try{
    e.preventDefault();
    await axios.post(`${api}/timesheet/create`,formData,{
              headers:{'token':Cookies.get('token')}
              })
    .then(()=>{
        alert("Time sheet added")
        setFormData({date:'',project:'',hoursWorked:'',notes:''})
    })
    .catch(err=>{
        alert("try again")
    })
}
catch(error){
    console.log(error.message)
}
}
  return (
    <div className="main">
        <form className="card p-3" onSubmit={submit}>
      <h5 className="mb-3">Add Timesheet Entry</h5>
      <div className="row g-2">
        <div className="col-md-3">
          <label className="form-label">Date</label>
          <input className="form-control" type="date" 
             name="date" value={formData.date}  onChange={formChange}   required />
        </div>
        <div className="col-md-4">
          <label className="form-label">Project</label>
          <input className="form-control" placeholder="Project" 
             name="project" value={formData.project}  onChange={formChange}   required />
        </div>
        <div className="col-md-2">
          <label className="form-label">Hours</label>
          <input className="form-control" type="number" min="0" max="24" step="0.25" 
             name="hoursWorked" value={formData.hoursWorked}  onChange={formChange}  required />
        </div>
        <div className="col-md-12">
          <label className="form-label">Notes</label>
          <textarea className="form-control" rows="2" 
            name="notes" value={formData.notes}  onChange={formChange}      />
        </div>
      </div>
      {/* {error && <div className="text-danger mt-2 small">{error}</div>} */}
      <div className="mt-3 d-flex gap-2 justify-content-between">
        <input className="btn btn-primary" type="submit" value="Add"></input>
        <button className="btn btn-warning" onClick={()=>navigate("/user/dashboard")}> Back to</button>
      </div>
    </form>
    </div>
  );
}
