import './Login.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email,setEmail]=useState(''); 
const [passw, setPassw]=useState(''); 
  return (
    <div className='login_screen'>
        <header className='login_screen_header'>
        <Link to='/'><img className='login_screen_logo' alt="" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"></img></Link>
        </header>
        <div className='login_screen_background'>
         <img alt="Logo" src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_small.jpg"></img>
        
        </div>

        <div className='login_screen_body'>
            <h1>Sign In</h1>
            <form>
            <div className="Login_email">
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required={true}></input>
                  <label>Email Address</label>
                </div>
                <div className="password">
                <input type='password' value={passw} onChange={(e)=>setPassw(e.target.value)} required={true}></input>
                <label>Password</label>
                </div>
                <button className='login_screen_get_started'>Sign In</button>
                <div className="login_screen_remember_me">
                    <div className='login_screen_checkbox'>
                    <input type='checkbox'></input>
                    <span>Remember me</span>
                    </div>
                    <span className='login_screen_need_help'><a>Need help?</a></span>
                </div>
                <h4>New to Netflix? <a href="" className='login_screen_sign_up'>Sign up now.</a></h4>
            </form>
        </div>
        
        
      
    </div>
  )
}

export default Login
