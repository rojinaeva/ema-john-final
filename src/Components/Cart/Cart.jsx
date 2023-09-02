import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Cart = (props) => {
    const {cart}=props;
    const handleClearCart=props.handleClearCart;
    console.log(cart);
    // const cart=props.cart;
    let total=0;
    let totalShipping=0;
    let quantity=0;
    for(const product of cart){
        
        // or 
        // if(product.quantity===0){
        //     product.quantity=1;
        // }
      total=total+product.price*product.quantity;
      totalShipping=totalShipping+product.shipping*product.quantity;
      quantity=quantity+product.quantity;
    }
    const tax=total*7/100;
    const grandtotal=total+totalShipping+tax;
    return (
        <div className='cart'>
            <h3>cart summary</h3>
            <p>selected items: {quantity}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping Charge:${totalShipping}</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <h6>Grand Total:${grandtotal.toFixed(2)}</h6>
            <button onClick={()=>handleClearCart()} className='btn-clear-cart'> 
                <span>Delete Cart</span>
                <span> <FontAwesomeIcon  icon={faTrash} /></span>
            </button>
        </div>
    );
};

export default Cart;