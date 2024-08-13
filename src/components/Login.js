import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login-box'>
      <h2>Login to Your account</h2>
      <span>Don't have an account?<Link>Sign Up Free!</Link></span>
      <div className='social'>
      <i class="fa fa-facebook-official" aria-hidden="true"></i>
      <i class="fa fa-instagram" aria-hidden="true"></i>
      <i class="fa fa-twitter" aria-hidden="true"></i>
      </div>
       
      <form className='login-form'>
        <input type='email' placeholder='Email Address'/>
        <input type='text' placeholder='Password'/>
        <div>
        <input type='checkbox' className='checkbox'/>
        <label>Remmember me</label>
        <Link>Forget password?</Link>
        </div>
        <button type='submit' className='btn btn-light'>Sign in</button>
      </form>
    </div>
  )
}
