import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";



const api=import.meta.env.VITE_API_BASE_URL

export default function TimesheetForm() {
  const userId=Cookies.get('userId')
  const [form, setForm] = useState({userId:userId, date: "", project: "", hoursWorked: 0, notes: "" });
  const [error, setError] = useState("");

  // useEffect(() => {
    
  // }, []);

  const formChange=(e)=>{
      setForm({...form,[e.target.name]:e.target.value})
  }
   

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${api}/timesheet/create`,form,{
                  headers:{'token':Cookies.get('token')}
                  })
          .then(()=>{
            alert("Time sheet added")
            setForm({date: "", project: "", hoursWorked: 0, notes: "" })
          })
    setError("");
      
    } catch (e) {
      setError(e.response?.data?.message || e.message);
    }
  };

  return (
    <form className="card p-3" onSubmit={submit}>
      <h5 className="mb-3">Add Timesheet Entry</h5>
      <div className="row g-2">
        <div className="col-md-3">
          <label className="form-label">Date</label>
          <input
            className="form-control"
            type="date"
            value={form.date}
            name="date"
            onChange={ formChange}
            required
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Project</label>
          <input
            className="form-control"
            placeholder="Project"
            value={form.project}
            name="project"
            onChange={ formChange}
            required
          />
        </div>
        <div className="col-md-2">
          <label className="form-label">Hours Worked</label>
          <input
            className="form-control"
            type="number"
            min="0"
            max="24"
            step="0.25"
            name="hoursWorked"
            value={form.hoursWorked}
            onChange={formChange}
            required
          />
        </div>
        <div className="col-md-12">
          <label className="form-label">Notes</label>
          <textarea
            className="form-control"
            rows="2"
            name="notes"
            value={form.notes}
            onChange={formChange}
          />
        </div>
      </div>
      {error && <div className="text-danger mt-2 small">{error}</div>}
      <div className="mt-3 d-flex gap-2">
        <input className="btn btn-primary" type="submit" value="Add" />
         
      </div>
    </form>
  );
}
