import React from 'react';
import './CartItem.css';


const CartItem = (props) => {

    const { theName, thePrice, theQuantity, thePath } = props;

    return(
        <React.Fragment>
        <div className="cartEntireCard" style={{ textDecoration: 'none' }}>
          
        <img src={thePath} width="461" height="270" id="cartSneakerpicture" />
        <div className='cartItemInfoContainer'>
        <section id="cartNameSpace">{theName}</section>
        <section id="cartAgeSpace">Price ${thePrice}</section>
        <div id="cartQuantitySpace">Quantity: {theQuantity}</div>
        </div>
        </div>
        <div className="cartMobileentireCard" style={{ textDecoration: 'none' }}>
          
          <img src={thePath} width="461" height="270" id="cartMobilesneakerpicture" />
      <section id="cartNameSpace">{theName}</section>
      <section id="cartAgeSpace">$ {thePrice}</section>
      <div id="cartMobilequantitySpace"></div>
      </div>
        </React.Fragment>
    )
};

export default CartItem;