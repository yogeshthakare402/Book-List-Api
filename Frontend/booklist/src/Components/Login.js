import React from 'react';
import "./BookList.css";
import {useNavigate} from 'react-router-dom';

function Login() {
    let nevigate = useNavigate()

    const onSubmit = (e)=>{
        e.preventDefault();
        nevigate("/booklistPage")
    }

  return (
    <div className='loginPage'>
        <h1>Member Login</h1>
        <form id='loginInput' onSubmit={onSubmit}>
        <input type="email" name="email" id="loginEmail" className='loginInput' placeholder='Username' required/>
        <input type="password" name="password" id="loginPassword" className='loginInput' placeholder='Password' required/>
        <button type="submit" className='loginbtn'>LOGIN</button>
        </form>

        <p className='error'>Forgot password?</p>
        
    </div>
  )
}

export default Login