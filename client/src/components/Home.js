import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Product from './Product';
import axios from 'axios';

const Home = () => {

const [Name, setName] = useState('')

const [Price, setPrice] = useState()

const [Description, setDescription] = useState('')

const [Path, setPath] = useState('')

    useEffect(() => {
        
    const mountCall = async () => {
    const response = await axios.get('/home');

    const responseComplete = await response.data;

    console.log(responseComplete)


    const { theName, thePrice, theDescription, theSneakerPath } = responseComplete;
   
    setName(theName)
    setPrice(thePrice)
    setDescription(theDescription)
    setPath(theSneakerPath)


    console.log(theDescription)
    }

    mountCall();
},[])


    return(
        <React.Fragment>
        <Header />
        <div className='productsListHeader'></div>
        <div className='productsContainer'>
        <Link to={`/products/${Name}`}><Product theName={Name} thePrice={Price} theDescription={Description} thePath={Path}/></Link>
        <Link to={`/products/${Name}`}><Product theName={Name} thePrice={Price} theDescription={Description} thePath={Path}/></Link>
        <Link to={`/products/${Name}`}><Product theName={Name} thePrice={Price} theDescription={Description} thePath={Path}/></Link>
        <Link to={`/products/${Name}`}><Product theName={Name} thePrice={Price} theDescription={Description} thePath={Path}/></Link>

        </div>
        </React.Fragment>
    )
}

export default Home;