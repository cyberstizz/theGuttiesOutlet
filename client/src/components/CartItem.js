import React from 'react';
import './CartItem.css';


const CartItem = (props) => {

    const { theName, thePrice, theQuantity, thePath } = props;

    return(
        <React.Fragment>
        <div className="cartEntireCard" style={{ textDecoration: 'none' }}>
          
        <img src={thePath} id="cartSneakerpicture" />
        <div className='cartItemInfoContainer'>
        <section id="cartNameSpace">{theName}</section>
        <section id="cartAgeSpace">Price ${thePrice}</section>
        <div id="cartQuantitySpace">Quantity: {theQuantity}</div>
        </div>
        </div>
        <div className="cartMobileentireCard" style={{ textDecoration: 'none' }}>
          
          <img src={thePath} id="cartMobilesneakerpicture" />
      <section id="cartMobileNameSpace">{theName}</section>
      <section id="cartMobileAgeSpace">$ {thePrice}</section>
      <div id="cartMobilequantitySpace"></div>
      </div>
        </React.Fragment>
    )
};

export default CartItem;