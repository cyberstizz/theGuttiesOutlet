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
        <Product name={artist} age={40} skill={10}/>
        <section id="comingsoon"> </section>
       <Link to={`/products/${artist}`}> <button id="randomButton">{artist}</button></Link>
        <Footer />
        </React.Fragment>
    )
}

export default Home;