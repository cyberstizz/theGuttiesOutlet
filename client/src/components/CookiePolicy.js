import React from "react";
import Footer from "./Footer";
import './CookiePolicy.css';


const CookiePolicy = () => {


    return(
        <React.Fragment>
        <div style={{fontSize: '60px'}}>We use cookies at gutties outlet <br />
        but this is only done to enhance your experience <br />
        for things like your shopping cart and signing in :)
        </div> <br />
        <p><a href="/" style={{fontSize: '30px'}}>Go back home</a></p>
        <div style={{height: '40vh'}}></div>


        </React.Fragment>
    )
}

export default CookiePolicy;