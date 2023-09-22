import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
  const {user, logout}=useContext(AuthContext);


  const handleLogout=()=>{
    logout()
    .then(()=>{

    })
    .catch(error=>{
      console.log(error.message);
    })
  }
    return (
        <nav className='header'>
           <img src={logo} alt="" />
           <div>
             <Link to="/">Shop</Link>
             <Link to="/orders">Orders</Link>
             <Link to="/inventory">Manage Inventory</Link>
             <Link to="/login">Login</Link>
             <Link to="/signup">Sign Up</Link>
             {user&& <span className='text'>welcome {user.email} <button onClick={handleLogout}>logout</button></span>}
           </div>
        </nav>
    );
};

export default Header;
