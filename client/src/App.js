import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import ProductDescription from './components/ProductDescription';
import CreatePage from './components/CreatePage';
import DeletePage from './components/DeletePage';

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
        <Route path='/products/:productId' element={<ProductDescription />} />
        <Route path='/createPage' element={<CreatePage />} />
        <Route path='/deletePage' element={<DeletePage />} />

        </Routes>
        </Router>
    );
  }
}

export default App;