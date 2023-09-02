import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Layout/Root.jsx';
import Shop from './Components/Shop/Shop.jsx';
import Inventory from './Components/Inventory/Inventory.jsx';
import Login from './Components/Login/Login.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import Orders from './Components/Orders/Orders.jsx';
import cartProductsLoader from './Loaders/cartProductsLoader.js';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path:'/',
       element:<Shop></Shop>
      },
      {
        path:'/orders',
       element:<Orders></Orders>,
       loader:cartProductsLoader
      },
      {
        path:'/inventory',
       element:<Inventory></Inventory>
      },
      {
        path:'/login',
       element:<Login></Login>
      },
      {
        path:'*',
       element:<NotFound></NotFound>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
