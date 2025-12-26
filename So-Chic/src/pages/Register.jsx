import React from 'react'
import { Link } from 'react-router-dom';

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    setErrorMessage("");
    setSuccessMessage("");

  }
  return (
    <div className='reg-container'>
      <h2>Create Your Account</h2>
      
          <form className='register'>
            <input className='reg-input' placeholder="Email" />

            <input className='reg-input' placeholder="Username" />

            <input className='reg-input' placeholder="Password" />

             <input className='reg-input' placeholder="Repeat-Password" />
              <button className='reg-submit' onClick={handleSubmit}>
              Sign Up
            </button>
          <p>Have already account? Login
            <Link to="/login"> here
            </Link> 
            </p>
             
          </form>
         
    </div>
  )
}

export default Register