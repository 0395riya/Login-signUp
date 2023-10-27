import React, { useState } from 'react'
import '../Components/Loginsignup.css'
import { BiSolidUser } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordLine } from 'react-icons/ri'

const LoginSignup = () => {

const [action, setAction] = useState("Sign Up")

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
      {action=== 'Login' ? <div></div> : <div className='input'>
          <BiSolidUser className='image'/>
          <input type='text' placeholder='Name'/>
        </div>}
        
        <div className='input'>
          <HiOutlineMail className='image'/>
          <input type='email' placeholder='Email ID'/>
        </div>
        <div className='input'>
          <RiLockPasswordLine className='image'/>
          <input type='password' placeholder='Password'/>
        </div>
      </div>
      {action === 'Sign up' ? <div></div> :<div className='forgot-password'>
        Lost Password ? <span>click Here!</span>
      </div>}
      
      <div className='submit-container'>
        <div className={action === "Login" ? "Submit gray" : "Submit"} onClick={() => {setAction("Sign up")}}>Sign up</div>
        <div className={action === "Sign up" ? "Submit gray" : "Submit"} onClick={() => {setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup
