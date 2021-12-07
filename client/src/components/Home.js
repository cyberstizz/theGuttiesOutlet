import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Home = () => {

const [artist, setArtist] = useState('')
    useEffect(() => {
        
    const mountCall = async () => {
    const response = await fetch('http://localhost:5005/');
    const body = await response.text();
    setArtist(body)
    console.log(body)
    }

    mountCall();
},[])


    return(
        <React.Fragment>
        <Header />
        <section id="comingsoon"> </section>
       <Link to={`/${artist}`}> <button id="randomButton">{artist}</button></Link>
        <Footer />
        </React.Fragment>
    )
}

export default Home;