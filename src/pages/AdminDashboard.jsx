
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { API } from "../utils/constants";

// const api=import.meta.env.VITE_API_BASE_URL


export default function AdminDashboard() {

        const [userData,setUserData]=useState([{_id:"",userName:"",role:""}])
        const navigate=useNavigate()
        useEffect(()=>{
          if(Cookies.get('adminToken')){
              axios.get(API+`/admin/all/user`,{
              headers:{'adminToken':Cookies.get('adminToken')}
              })
              .then((response)=>{
                  setUserData(response.data.message)
                  console.log(response.data.message)
                  
              })
              .catch(err=>{
              console.log("error while fetching time sheets")
             })
          }
          else{
            navigate("/admin/login")
          }
      },[])

      const userClick=async(id)=>{
      
          try{
            console.log(id)  
          }
          catch(error){
            console.log(error.message)
          }
      }
  
 



  return (
    <div>
      <div><Navbar /></div>
      <div className="container mt-4">
        <div className="d-flex justify-content-between m-2">
          <div className="h1 text-primary">{Cookies.get('AdminName')}</div>
          {/* <button onClick={btnClick} className="btn btn-warning btn-sm p-3">Add Time Sheet</button> */}
        </div>
      <div className="row">
        {userData.length === 0 ? (
          <p className="text-muted">No User</p>
        ) : (
          userData.map((entry) => (
            <div className="col-md-4 mb-3" >
              <div className="card h-100 shadow-sm ">
                <div className="card-body">
                  <h5 className="card-title">{entry.userName}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {entry.role}
                  </h6>
                </div>
                <div className="my-3 mx-3">
                  <button className="btn btn-warning"  onClick={()=>userClick(entry._id)}>Click</button>
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
