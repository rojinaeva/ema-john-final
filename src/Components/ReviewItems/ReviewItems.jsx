import React from 'react';
import './ReviewItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ReviewItems = (props) => {
    const {id,img,name,price,quantity}=props.product;
   
    return (
        <div className='review-item'>
           <img src={img} alt="" />
           <div className='review-info'>
              <p className='product-title'>{name}</p>
              <p>Price: <span className='orange-text'>${price}</span></p>
              <p>Quantity : <span className='orange-text'>{quantity}</span></p>
           </div>
           <button className='btn-delete'> <FontAwesomeIcon className='icon-style' icon={faTrash} /></button>
        </div>
    );
};

export default ReviewItems;