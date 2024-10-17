/*import React from 'react'
import { Link } from "react-router-dom";

export default function Welcomecontent() {
  return (
    <>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",zIndex:"20",position:"absolute",top:"160px",left:"400px",textAlign:"center",opacity:"0.8"}}>
        <div  style={{fontSize:"50px",backgroundColor:"white",borderRadius:"8px",marginBottom:"20px",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Times New Roman",paddingLeft:"20px",paddingRight:"20px"}}><div style={{color:"black",opacity:"1"}}>Welcome to Agro-सफल<img style={{height:"70px",borderRadius:"50%",marginLeft:"20px"}} src="/logo.jpg" alt="Description" /></div></div>
        <Link to="/login" className="welcomebtn" style={{height:"40px",width:"150px",textDecoration:"none",color:"Black",backgroundColor:"white",borderRadius:"4px",display:"flex",justifyContent:"center",alignItems:"center"}}>Get started<i className="fa-solid fa-arrow-right" style={{marginLeft:"10px"}}></i></Link>
    </div>
    </>
    
  )
}
import React from 'react';
import { Link } from "react-router-dom";
//import './WelcomeContent.css'; // Import the CSS file

export default function WelcomeContent() {
  return (
    <div className="welcome-container">
      <div className="welcome-message">
        <div className="welcome-text">
          Welcome to Agro-सफल
          <img className="welcome-logo" src="/logo.jpg" alt="Description" />
        </div>
      </div>
      <Link to="/login" className="welcome-btn">
        Get started
        <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </div>
  );
}*/
import React from 'react';
import { Link } from "react-router-dom";

export default function WelcomeContent() {
  return (
    <div className="welcome-container">
      <div className="welcome-message">
        <div className="welcome-text">
          Welcome to Agro-सफल
          <img className="welcome-logo" src="/logo.jpg" alt="Description" />
        </div>
      </div>
      <Link to="/login" className="welcome-btn">
        Get started
        <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </div>
  );
}
