import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";

function HeaderDashboard()
 {
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3001/getDashboardData")
    .then(data=>{
      console.log(data);
      setData(data.data)})
    .catch(err=>console.log(err))
  }, [])
  
  return (
    <h3>DashboardApp</h3>
  );
}

export default HeaderDashboard;
