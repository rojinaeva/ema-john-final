import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
  const [error,setError]=useState('');
  const location=useLocation();
  console.log(location);
  const from=location.state?.from?.pathname||'/';
  const navigate=useNavigate();
  const {signIn}=useContext(AuthContext);
    const handleSignIn=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
    
        
       signIn(email,password)
       .then(result=>{
        const loggedUser=result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(error=>{
        console.log(error.message);
        // setError(error.message);
      })

    }
    return (
        <div className='form-container'>
            <h3 className='form-title'>Please Login</h3>
            <form onSubmit={handleSignIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='Enter your email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='Enter your password' required/>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='navigate-link'><small>New to Ema-john? <Link to='/signup'>Create New Account</Link></small></p>
            {/* <p className='text-error'>{error}</p> */}
        </div>
    );
};

export default Login;