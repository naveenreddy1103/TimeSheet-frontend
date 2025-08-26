
import { useNavigate, Link } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";

const api=import.meta.env.VITE_API_BASE_URL


export default function Admin() {

        const [timeSheetData,setTimeSheetData]=useState([{_id:"",date:"",project:"",hoursWorked:0,notes:""}])
        const navigate=useNavigate()
        useEffect(()=>{
          if(Cookies.get('adminToken')){
              axios.get(`${api}/all/timesheet`,{
              headers:{'adminToken':Cookies.get('adminToken')}
              })
              .then((response)=>{
                  setTimeSheetData(response.data.data)
                  console.log(response.data.data)
              })
              .catch(err=>{
              console.log("error while fetching time sheets")
             })
          }
          else{
            navigate("/admin/login")
          }
      },[])
  
 



  return (
    <div>
      {/* <div><Navbar /></div> */}
      <div className="container mt-4">
        <div className="d-flex justify-content-between m-2">
          <div className="h1 text-primary">{Cookies.get('AdminName')}</div>
          {/* <button onClick={btnClick} className="btn btn-warning btn-sm p-3">Add Time Sheet</button> */}
        </div>
      <div className="row">
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
                
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
}
