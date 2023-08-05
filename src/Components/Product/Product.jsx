import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const {img,name,price,seller,ratings}=props.product;
   const handleAddToCart=props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}stars</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='cart-btn'>Add To Cart</button>
        </div>
    );
};

export default Product;