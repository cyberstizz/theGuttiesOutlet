import React, { useState } from 'react';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { useEffect } from 'react';



 const Cart = () => {

  const theItems = useSelector((state) => state.items)

  console.log(theItems)


  let totalPrice = 0;

  let theFinalPrice = 0;
  
  theItems.forEach(item => theFinalPrice += item.price)


  if(theItems){
    theItems.forEach(item =>  {
      console.log(typeof(item.price))
      totalPrice = (totalPrice + Number(item.price))
    })
  }
  console.log(`this is the total price ${totalPrice}`)



   useEffect( ()=> {
           if(theItems){ 
             return <div className='fullCartBlock'>
               <div className='cartTotal'><p>Cart</p></div>
               <div className='cartItems'>
                 Cart items
               {theItems.map((item) => 
              <CartItem key={item.name} theName={item.name} thePrice={item.price} theQuantity={1} thePath={item.sneakerPath} />
                                                  
              )}</div>
              </div>
           } else{
 return <div className='cartBlock'>there are no items in your cart</div>
           }

          }, [])

          if(theItems){ 
            return <div className='fullCartBlock'>
              <div className='cartTotal'><p>Cart</p>
              
              <ul>
               {theItems.map(item => <li>{item.name}</li>)}
              </ul>
              <p>{`total price = ${theFinalPrice}`}</p>
              
              </div>
              <div className='cartItems'>
                Cart items
              {theItems.map((item) => 
             <CartItem key={item.name} theName={item.name} thePrice={item.price} theQuantity={1} thePath={item.sneakerPath} />
                                                 
             )}</div>
             </div>
          } else{
return <div className='cartBlock'>there are no items in your cart</div>
          }

};


// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   }

// };

// export default connect(mapStateToProps)(Cart);
export default Cart;


