import React, { useState } from 'react';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';



 const Cart = () => {

  const theItems = useSelector((state) => state.items)

  console.log(theItems)


  let totalPrice = 0;

  let theFinalPrice = 0;
  
  theItems.forEach(item => theFinalPrice += item.price)


  if(theItems){
    theItems.forEach(item =>  {
      console.log(typeof(item.price))
      totalPrice = (totalPrice + item.price)
    })
  }
  console.log(`this is the total price ${totalPrice}`)


  const handleToken = token => {
    console.log(token);

    const products = {
        products: theItems,
        price: theFinalPrice,
    };

    const body = {
        token,
        products
    };

    const headers = {
        "Content-Type": "application/json"
    }


    return fetch('/payments', {
        method: "POST",
        headers,
        body: JSON.stringify(body)
    }).then(response => {
        const { status } = response;
        console.log(response)
    }).catch(error => console.log(error));

    }




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
              <div className='cartTotal'><p>Checkout</p>  
              <ul style={{listStyle: 'none'}}>
               {theItems.map(item => <li>{item.name} : {item.price}</li>)}
              </ul>
            
              <p>{`Grand total = ${theFinalPrice}`}</p>
              <StripeCheckout 
                   stripeKey={'pk_test_51KD0MTBGolAm0YdrCJ4QlFJf3Bdv4WckkNGl6tKyrBvXE5GvP9WCWpOQEzyNT1wQD6zCKZQNj7AmDF1dRfWiZ7Y400CfbKGLoM'}
                   token={handleToken}
                   name='checkout'
                   amount={theFinalPrice * 100}
                > 
                <button id="purchaseButtonBuy">Buy now</button>
                </StripeCheckout>
              
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


