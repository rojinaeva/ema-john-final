import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const savedCart=useLoaderData();
    const [cart,setCart]=useState(savedCart);
    // console.log(products);

    const handleRemoveFromCart=(id)=>{
        const remaining=cart.filter(product=>product.id!==id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart=()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
           <div className="review-container">
              {
                cart.map(product=><ReviewItems
                key={product.id}
                product={product}
                handleRemoveFromCart={handleRemoveFromCart}></ReviewItems>)
               }
           </div>
           <div className="cart-container">
              <Cart cart={cart}
              handleClearCart={handleClearCart}>
               <Link to='/checkout'>
                  <button className='btn-checkout'>
                  <span>Proceed Checkout</span>
                  <span><FontAwesomeIcon className='icon-style' icon={faCreditCard} /></span> 
                  </button></Link>
              </Cart>
           </div>
        </div>
    );
};

export default Orders;