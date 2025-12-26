import React from 'react'

function Register() {
  return (
    <div className='reg-container'>
      <div className='reg-form'>
          <h2>Create Your Account</h2>
          <form className='regForm'>
            <input className="Email" placeholder="Email" />
            <input className="Username" placeholder="Username" />
            <input className="Password" placeholder="Password" />
            <button className='reg-submit'>
              Register
            </button>
          </form>
        </div>
    </div>
  )
}

export default Register