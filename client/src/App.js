import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import ProductDescription from './components/ProductDescription';
import CreatePage from './components/CreatePage';
import DeletePage from './components/DeletePage';
import Footer from './components/Footer';
import Cart from './components/Cart';
import TestPage from './components/testPage';
import NewArrivals from './components/NewArrivals';
import BestSellers from './components/BestSellers';
import Discounts from './components/Discounts';
import Search from './components/Search';
import Success from './components/Success';




class App extends Component {
state = {
    data: null
  };


    // fetching the GET route from the Express server which matches the GET route from server.js
    //broadway check this out
  callBackendAPI = async () => {
    const response = await fetch('http://localhost:5001/');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
        <Router>
          
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newArrivals' element={<NewArrivals />} />
        <Route path='/bestSellers' element={<BestSellers />} />
        <Route path='/discounts' element={<Discounts />} />
        <Route path='/search/:query' element={<Search />} />
        <Route path='/products/:productId' element={<ProductDescription />} />
        <Route path='/createPage' element={<CreatePage />} />
        <Route path='/deletePage' element={<DeletePage />} />
        <Route path='products/:user/Cart/:user' element={<Cart />} />
        <Route path='/test' element={<TestPage />} />
        <Route path='/Cart/:user' element={<Cart />} />
        <Route path='/success' element={<Success />} />





        </Routes>
        <Footer />
        </Router>
    );
  }
}

export default App;