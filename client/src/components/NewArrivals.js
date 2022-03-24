import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import './NewArrivals.css';
import { Link } from 'react-router-dom';
import Product from './Product';
import axios from 'axios';

const NewArrivals = () => {

const [Products, setProducts] = useState([])

const [Price, setPrice] = useState()

const [Description, setDescription] = useState('')

const [Path, setPath] = useState('')

    useEffect(() => {
        
    const mountCall = async () => {
    const response = await axios.get('/newArrivals');

    const responseComplete = await response.data.data.map(item => item);

    console.log(responseComplete)

    setProducts(responseComplete)

    // const { theName, thePrice, theDescription, theSneakerPath } = responseComplete;
   
    // setName(theName)
    // setPrice(thePrice)
    // setDescription(theDescription)
    // setPath(theSneakerPath)


    // console.log(theDescription)
    }

    mountCall();
},[])


    return(
        <div className='everything'>
        <Header />
        <div className='newArrivalsProductsListHeader'></div>
        <div className='newArrivalsProductsContainer'>
        {/* <Link to={Name ? `/products/${Name}` : '/products/levelup'}><Product theName={Name ? Name : 'levelup'} thePrice={Price ? Price : 700} theDescription={Description ? Description : 'just do it'} thePath={Path ? Path : '/pics/levelupphoto-yeey.png'}/></Link>
        <Link to={Name ? `/products/${Name}` : '/products/levelup'}><Product theName={Name ? Name : 'levelup'} thePrice={Price ? Price : 700} theDescription={Description ? Description : 'just do it'} thePath={Path ? Path : '/pics/levelupphoto-yeey.png'}/></Link>
        <Link to={Name ? `/products/${Name}` : '/products/levelup'}><Product theName={Name ? Name : 'levelup'} thePrice={Price ? Price : 700} theDescription={Description ? Description : 'just do it'} thePath={Path ? Path : '/pics/levelupphoto-yeey.png'}/></Link>
        <Link to={Name ? `/products/${Name}` : '/products/levelup'}><Product theName={Name ? Name : 'levelup'} thePrice={Price ? Price : 700} theDescription={Description ? Description : 'just do it'} thePath={Path ? Path : '/pics/levelupphoto-yeey.png'}/></Link> */}
        {Products.map(product => <Link key={`${product.name}`} to={`/products/${product.name}`}><Product theName={product.name} thePrice={product.price} theDescription={product.description} thePath={product.sneakerpath}/></Link>
)}
        </div>
        </div>
    )
}

export default NewArrivals;