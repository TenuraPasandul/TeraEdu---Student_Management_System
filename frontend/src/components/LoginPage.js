import React from "react";
import "../css/style.css"; // Import the CSS file
import tera from "../assets/tera1.png";

function LoginPage() {
  return (
    <div className="container">
      <div className="main-form">
      <img src={tera} className="tera"/>
        <div className="inputs">
        
          <h1 className="header">Sign in</h1>
          <input type="text" className="username" placeholder="username" />
          <input type="password" className="password" placeholder="password" />
          <button className="btn">Sign in</button>
        </div>
      </div>
      <div className="login-squre"></div>
    </div>
  );
}

export default LoginPage;
