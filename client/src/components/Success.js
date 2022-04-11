import React from "react";
import Footer from "./Footer";
import './Success.css';


const Success = () => {


    return(
        <React.Fragment>
        <div style={{fontSize: '60px'}}>Success! Your order is complete. <br />
        You will receive a confirmation email shortly.</div> <br />
        <p><a href="/" style={{fontSize: '30px'}}>Go back home</a></p>
        <div style={{height: '40vh'}}></div>


        </React.Fragment>
    )
}

export default Success