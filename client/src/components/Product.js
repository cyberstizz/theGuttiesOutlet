import React from 'react';
import './Product.css';
import Yeezy from '../yeey.png';
import { Link } from 'react-router-dom';



const Product = (props) => {

    const { theName, thePrice, theDescription, thePath } = props;

    return(
        // <Link to={`/products/${name}`}> </link>
        <div className="entireCard" href={`/products/${name}`} style={{ textDecoration: 'none' }}>
          
            <img src={thePath}/>
        <section id="nameSpace">{theName}</section>
        <section id="ageSpace">{thePrice}</section>
        <section id="skillSpace">{theDescription}</section>
        </div>
    )
};

export default Product;