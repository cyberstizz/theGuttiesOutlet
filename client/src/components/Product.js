import React from 'react';
import './Product.css';
import Yeezy from '../yeey.png';
import { Link } from 'react-router-dom';



const Product = (props) => {

    const { name, age, skill } = props;

    return(
        // <Link to={`/products/${name}`}> </link>
        <div className="entireCard" href={`/products/${name}`} style={{ textDecoration: 'none' }}>
          
            <img src={Yeezy}/>
        <section id="nameSpace">{name}</section>
        <section id="ageSpace">{age}</section>
        <section id="skillSpace">{skill}</section>
        </div>
    )
};

export default Product;