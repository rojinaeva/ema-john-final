import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <h3 className='form-title'>Please Login</h3>
            <form>
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
        </div>
    );
};

export default Login;