import React from 'react';
import './Product.css';


const Product = (props) => {

    const { name, age, skill } = props;

    return(
        <div className="entireCard">
        <section id="nameSpace">{name}</section>
        <section id="ageSpace">{age}</section>
        <section id="skillSpace">{skill}</section>

        </div>
    )
};

export default Product;