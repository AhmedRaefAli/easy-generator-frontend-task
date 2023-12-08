import React, { useEffect, useState } from 'react';
import './LandingScreen.css'; 
import Header from '../components/header';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const LandingScreen = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState();
  const [user,setUser] = useState({
    name:'test'
  });

  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate("/login");
    }
    axios.get(
      "http://localhost:3000/auth/user",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    ).then(reposnse=>{
      setUser(reposnse.data.data.user);
    }).catch((error) => {
      if(error.response.data.errors && Array.isArray(error.response.data.errors)){
        setErr(error.response.data.errors[0]);
      }else{
        setErr(error.response.data.message);
      }
    });

  },[])
  const handleLogout = (e) => {
    e.preventDefault();
     axios.post(
            "http://localhost:3000/auth/logout",
            {},
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            }
          )
          .then((response) => {
            localStorage.removeItem('token');
            navigate("/login");
          })
          .catch((error) => {
            if(error.response.data.errors && Array.isArray(error.response.data.errors)){
              setErr(error.response.data.errors[0]);
            }else{
              setErr(error.response.data.message);
            }
          });
  };
  return (
    <div> 
      <Header userName={user.name} onLogout={handleLogout} />
      <div className="landing-container">
        <h1>Welcome to Your App</h1>
        <p>
          Thank you for logging in! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam vel ullamcorper libero, a laoreet justo.
        </p>
        <img
          src="https://cd-e.com/assets/uploads/easygenerator-box.jpg"
          alt="Landing Image"
          className="landing-image"
        />
      </div>
    </div>

  );
};

export default LandingScreen;
