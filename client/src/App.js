import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express}))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
    //broadway check this out
  callBackendAPI = async () => {
    const response = await fetch('/express');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
        <React.Fragment>
        <Header />
        <Footer />
        </React.Fragment>
    );
  }
}

export default App;