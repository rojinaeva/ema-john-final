import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
    console.log(cart);
    // const cart=props.cart;
    let total=0;
    let totalShipping=0;
    let quantity=0;
    for(const product of cart){
        product.quantity=product.quantity||1;
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
        </div>
    );
};

export default Cart;