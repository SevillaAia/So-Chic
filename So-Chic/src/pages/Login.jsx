import React from 'react'


function Login() {
  return (
  
     <div className='login-container'>

      <div className='log-info'>
      </div>
      <div className='logIn-form'>
          <h2>Welcome</h2>

         <form className='login'>
          <span>Username:</span>
          <input type="text" placeholder='e.g. jane_doe@email.com' className='input'/>

          <span>
            Password:
          </span>
          <input type='text' placeholder='password' className='input' />
          <button className='log-submit'>
          submit
        </button>
        </form>
        

        <p>Not a Chicster yet?<br />Click <a href="/Register">here</a> to create an account</p>
        </div>
     

    
        
    </div>
  )
}

export default Login