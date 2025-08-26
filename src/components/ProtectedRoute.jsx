// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";


export const ProtectedRoute = ({ children }) => {
 

  if (!Cookies.get('token')) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export const Protected=({children})=>{
  if(Cookies.get('token')){
    return <Navigate to="/user/dashboard" replcae />
  }
  return children
}


