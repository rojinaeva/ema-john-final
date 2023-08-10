import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';


const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    
    useEffect(()=>{
      fetch('products.json')
      .then(res=>res.json())
      .then(data=>setProducts(data))        
    },[])
    const handleAddToCart=(product)=>{
      //  const newCart=[...cart,product];
      let newCart=[];
      const exists=cart.find(pd=>pd.id===product.id);
      if(!exists){
        product.quantity=1;
        newCart=[...cart,product];
      }
      else{
        exists.quantity=exists.quantity+1;
        const remaining=cart.filter(pd=>pd.id!==product.id);
        newCart=[...remaining,exists];
      }

       setCart(newCart);
       addToDb(product.id);
    }
    // useEffect(()=>{
    //   // console.log(products);
    //   const storedCart=getShoppingCart();
    //   const savedCart=[];
    //   // step 1:get id
    //   for(const id in storedCart){
    //     // console.log(id);
    //     // step 2:get the product by using id
    //     const savedProduct=products.find(product=>product.id===id);
    //     // step 3:get quantity of the product
    //     if(savedProduct){
    //       const quantity=storedCart[id];
    //       savedProduct.quantity=quantity;
    //       // step 4:add the savedProduct to the savedcart
    //       savedCart.push(savedProduct);
    //     }
    //     // step 5:set the cart 
    //     setCart(savedCart);
        
    //   }
    // },[products])
    useEffect(()=>{
      const storedCart=getShoppingCart();
      const savedCart=[];
      // step 1:get id from storedCart 
      for(const id in storedCart){
      //  step 2:get product from products by using id in storedCart 
      const addedProduct=products.find(product=>product.id===id);
      if(addedProduct){
        // step 3:get quantity of the product 
        const quantity=storedCart[id];
        addedProduct.quantity=quantity;
        savedCart.push(addedProduct);
      }
      setCart(savedCart);
      }
    },[products])
   
    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                products.map(product=><Product
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}></Product>)
               }
            </div>
            <div className="cart-container">
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;