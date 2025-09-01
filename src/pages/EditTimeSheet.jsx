import { useState, useEffect } from "react";
import axios from "axios";
import './form.css'
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { API } from "../utils/constants";

// const api=import.meta.env.VITE_API_BASE_URL


export default function EditTimeSheet() {
    let id=Cookies.get("editTimeSheetId")
   
    const navigate=useNavigate();
    const [formData,setFormData]=useState({project:'',hoursWorked:0,notes:''})
  const formChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
const submit=async(e)=>{
   try{
    e.preventDefault()
    await axios.patch(API+`/timesheet/edit/${id}`,formData,{
                  headers:{'token':Cookies.get('token')}
                  })
    .then(()=>{
        alert("updated")
       navigate('/')
    })
    .catch(err=>{
        console.log(err.message)
    })
   }
   catch(error){
    console.log(error.message)
   }
}
  return (
    <div className="main">
        <form className="card p-3" onSubmit={submit}>
      <h5 className="mb-3">Edit Timesheet</h5>
      <div className="row g-2">
        {/* <div className="col-md-3">
          <label className="form-label">Date</label>
          <input className="form-control" type="date" 
                 required />
        </div> */}
        <div className="col-md-4">
          <label className="form-label">Project</label>
          <input className="form-control" placeholder="Project" 
             value={formData.project} onChange={formChange}     
            name="project" required />
        </div>
        <div className="col-md-2">
          <label className="form-label">Hours</label>
          <input className="form-control" type="number" min="0" max="24" step="0.25" 
            value={formData.hoursWorked} onChange={formChange}    
            name="hoursWorked" required />
        </div>
        <div className="col-md-12">
          <label className="form-label">Notes</label>
          <textarea className="form-control" rows="2" 
             name="notes" value={formData.notes} onChange={formChange}  />
        </div>
      </div>
      {/* {error && <div className="text-danger mt-2 small">{error}</div>} */}
      <div className="mt-3 d-flex gap-2">
        <button className="btn btn-primary" type="submit">Add</button>
      </div>
    </form>
    </div>
  );
}
