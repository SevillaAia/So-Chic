import React, {useState} from 'react'
import { Link } from 'react-router-dom'



function Login() {

  const [account, setAccount] = useState([
  {id: 1, username: 'jane_doe', password: 'password123'},
  {id: 2, username: 'john_smith', password: 'mypassword'}, 
  ]
);

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
          Log In
        </button>
        </form>
        

        <p>Not a Chicster yet?<br />Click 
        <Link to="/Register">
         here
         </Link>
           to create an account</p>
        </div>
     

    
        
    </div>
  )
}

export default Login