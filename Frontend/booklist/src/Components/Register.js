import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

function Register() {
    
  return (
    <div className='loginPage'>
    <h1>Register</h1>
    <div id='loginInput'>
    <input type="email" name="email" id="loginEmail" className='loginInput' placeholder='Username' required/>
    <input type="password" name="password" id="loginPassword" className='loginInput' placeholder='Password' required/>
    <input type="password" name="confirmPassword" id="confirmPassword" className='loginInput' placeholder='Confirm Password' required/>
    <button type="submit" className='loginbtn'>Register</button>
    </div>
    
    <Link to={"/login"} className="loginLink">Member Login</Link>
    
     </div>
  )
}

export default Register