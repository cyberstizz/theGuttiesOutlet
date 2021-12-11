import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Product from './Product';

const Home = () => {

const [artist, setArtist] = useState('')
    useEffect(() => {
        
    const mountCall = async () => {
    const response = await fetch('http://localhost:5001/');
    const body = await response.text();
    setArtist(body)
    console.log(body)
    }

    mountCall();
},[])


    return(
        <React.Fragment>
        <Header />
        <div className='productsListHeader'></div>
        <div className='productsContainer'>
        <Link to={`/products/${artist}`}><Product name={artist} age={40} skill={10}/></Link>
        <Link to={`/products/${artist}`}><Product name={artist} age={40} skill={10}/></Link>
        <Link to={`/products/${artist}`}><Product name={artist} age={40} skill={10}/></Link> 
        <Link to={`/products/${artist}`}><Product name={artist} age={40} skill={10}/></Link>

        </div>
        <Footer />
        </React.Fragment>
    )
}

export default Home;