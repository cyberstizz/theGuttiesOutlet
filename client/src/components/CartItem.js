import React from 'react';


const CartItem = (props) => {

    const { theName, thePrice, theQuantity, thePath } = props;

    return(
        <React.Fragment>
        <div className="entireCard" style={{ textDecoration: 'none' }}>
          
        <img src={thePath} width="461" height="270" id="sneakerpicture" />
        <section id="nameSpace">{theName}</section>
        <section id="ageSpace">Price ${thePrice}</section>
        <div id="quantitySpace">Quantity: {theQuantity}</div>
        </div>
        <div className="mobileentireCard" style={{ textDecoration: 'none' }}>
          
          <img src={thePath} width="461" height="270" id="mobilesneakerpicture" />
      <section id="nameSpace">{theName}</section>
      <section id="ageSpace">$ {thePrice}</section>
      <div id="mobilequantitySpace"></div>
      </div>
        </React.Fragment>
    )
};

export default CartItem;