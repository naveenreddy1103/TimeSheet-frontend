
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";

const api=import.meta.env.VITE_API_BASE_URL


export default function App() {

  const navigate=useNavigate()
  const [timeSheetData, setTimeSheetData] = useState([
  { _id: "", date: "", project: "", hoursWorked: 0, notes: "" }
]);
const [hourCount, setHourCount] = useState(0);

const countHours = (data) => {
  const total = data.reduce((acc, curr) => acc + curr.hoursWorked, 0);
  setHourCount(total);
};

const dataLoad = () => {
  if (Cookies.get('token')) {
    axios.get(`${api}/user/all/timesheet`, {
      headers: { token: Cookies.get('token') }
    })
    .then((response) => {
      const data = response.data.data;
      setTimeSheetData(data);
      countHours(data);
    })
    .catch(err => {
      console.log("error while fetching time sheets");
    });
  } else {
    navigate("/login");
  }
};

useEffect(() => {
  dataLoad();
}, []);

 
const deleteClick=async(id)=>{
  console.log(id)
  await axios.delete(`${api}/timesheet/delete/${id}`,{
              headers:{'token':Cookies.get('token')}
              })
  .then(()=>{
    alert("Time sheet deleted sucessfully")
    setTimeSheetData(prevData=>prevData.filter(entry=>entry._id!==id))
  })
  .catch(error=>{
    console.log(error.message)
  })
}
const btnClick=(e)=>{
  navigate('/add/timesheet')
}
const editClick=(e)=>{
  Cookies.set('editTimeSheetId',e._id)
  navigate('/edit/timesheet')
}

  return (
    <div>
      <div><Navbar /></div>
      <div className="container mt-4">
        <div className="d-flex justify-content-between m-2">
          <div className="d-flex" >
            <div className="h1 text-primary me-4">{Cookies.get('userName')}</div>
            <div className="mt-3 fw-bold">=>[Total Hours Worked:-{hourCount} ]</div>
          </div>
          <button onClick={btnClick} className="btn btn-warning fw-bold text-primary btn-sm p-3">Add Time Sheet</button>
        </div>
      <div className="row mt-4">
        {timeSheetData.length === 0 ? (
          <p className="text-muted">No timesheets available</p>
        ) : (
          timeSheetData.map((entry) => (
            <div className="col-md-4 mb-3" key={entry._id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{entry.project}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {new Date(entry.date).toLocaleDateString()}
                  </h6>
                  <p className="card-text">
                    <strong>Hours:</strong> {entry.hoursWorked} <br />
                    <strong>Notes:</strong> {entry.notes}
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={()=>editClick(entry)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={()=>deleteClick(entry._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
}
