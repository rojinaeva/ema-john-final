import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader=async()=>{
  const loadedProducts=await fetch('products.json');
  const products=await loadedProducts.json();

//   if cart data is in faDatabase,you have to use async await 
const storedCart=getShoppingCart();
const savedCart=[];
for(const id in storedCart){
    const addedProducts=products.find(pd=>pd.id===id);
    if(addedProducts){
        const quantity=storedCart[id];
        addedProducts.quantity=quantity;
        savedCart.push(addedProducts);
    }
}


// if you need to send two things then,
// return [products,savedCart],,,etar jonno destructure korte hbe.
// another option is
// return {products,savedCart},,eta jabe object hisebe products nam and er value hbey products so {products:products} 


  return savedCart;

    

}






export default cartProductsLoader;