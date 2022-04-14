import React from "react";
import Footer from "./Footer";
import './Settings.css';
import Header from './Header';


const Settings = () => {


    return(
        <React.Fragment>
            <Header />
        <div style={{fontSize: '80px'}}>Settings <br />
        Terms Of Service coming soon</div> <br />
        <p><a href="/" style={{fontSize: '30px'}}>Go back home</a></p>
        <div style={{height: '40vh'}}></div>


        </React.Fragment>
    )
}

export default Settings;