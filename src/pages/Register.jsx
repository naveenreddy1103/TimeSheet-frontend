
import axios from "axios";
import { useRef, useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import './form.css'
import { API } from "../utils/constants";

// const api =  import.meta.env.VITE_API_BASE_URL
 const Register=()=>{
    
    const [data,setData]=useState({userName:'',email:'',password:''});
    const navigate=useNavigate()
    function formChange(e){
        setData({...data,[e.target.name]:e.target.value});
    }
   
    const formsubmit=async(e)=>{
        try{
            e.preventDefault();
            await axios.post(API+`/user/signup`, data)
            .then(()=>{
                alert(`${data.userName} is added successfully`);
            setData({ userName: "", email: "", password: "" });
            navigate('/login')
            })
           .catch(err=>{
            alert("Try again")
            navigate("/register")
           })
        }
        catch(error){
            console.log({
                message:error.message
            })
        }
       }


    return(
       
      <div className="main" >
        
        <form className="mt-3 p-5 rounded rounded bg-white text-black" onSubmit={formsubmit}>
            <h3 className="bi bi-person-fill"> User Register</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" className="form-control" 
                placeholder="User Name" name="userName" value={data.userName}
                onChange={formChange} required></input></dd>
                <dt>Email</dt>
                <dd><input type="email" className="form-control" 
                placeholder="Email" name="email" value={data.email}
                onChange={formChange} required></input></dd>
                <dt>Password</dt>
                <dd><input type="password" className="form-control" 
                placeholder="password" name="password" value={data.password}
                onChange={formChange}></input></dd>
            </dl>
            <input type='submit' className="btn btn-warning w-100" value="Rgister"></input>
            <div className="mt-2 text-center">
                <Link to="/login" className="small">Have an account? Login</Link>
            </div>
        </form>
        
    </div>
    )
}

export default Register;