import React from "react";
import './Footer.css';

 const Header = () => {
    return(

        // first there is the main footer block which contains all footer elements and is set to a flex direction of row
        <footer id="footerBlock">
             {/* now each individual section will be set to flex column */}

             {/* first section will contain the logo and year of conception */}

            <section className="footer-logo">


                
            </section>


            <section className="footer-left"></section>


            <section className="footer-center"></section>


            <section className="footer-right"></section>


            <section className="footer-social-media"></section>
        </footer>
    )
};

export default Header;