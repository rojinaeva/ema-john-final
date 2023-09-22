import React, { useContext, useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Signup = () => {
    const [error,setError]=useState('');
    const {createUser}=useContext(AuthContext);

    const handleSignup=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const confirm=form.confirm.value;
        console.log(email,password,confirm);
        
       if(password!==confirm){
        setError('your password did not match');
        return;
      }
      else if(password.length<6){
       setError('password must be 6 characters or longer');
       return;
      }

      createUser(email,password)
      .then(result=>{
        const loggedUser=result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch(error=>{
        console.log(error.message);
        setError(error.message);
      })

    }
    return (
        <div className='form-container'>
            <h3 className='form-title'>Please Signup</h3>
            <form onSubmit={handleSignup}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='Enter your email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='Enter your password' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" placeholder='Enter your password' required/>
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p className='navigate-link'><small>Already have an account? <Link to='/login'>Login</Link></small></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default Signup;