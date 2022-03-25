import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";

 const Footer = () => {
    return(

        // first there is the main footer block which contains all footer elements and is set to a flex direction of row
        <footer id="footerBlock">
             {/* now each individual section will be set to flex column */}

             {/* first section will contain the logo and year of conception */}

            <section className="footer-logo-section">


            <div className="footer-logo"> </div>

            <div className="footer-conception-year"> @2021 </div>

            </section>


            <section className="footer-left">

                <ul className="footer-list-block">
                    <li className="footer-section-header">sitemap</li>
                  <Link to='/'><li className="footer-list-item">Home</li></Link>
                  <Link to='/newArrivals'><li className="footer-list-item">New Arrivals</li></Link>
                  <Link to='/bestSellers'><li className="footer-list-item">Best Sellers</li></Link>
                  <Link to='/discounts'><li className="footer-list-item">Discount</li></Link>

                </ul>
            </section>


            <section className="footer-center">
            <ul className="footer-list-block">
                    <li className="footer-section-header">Company</li>
                    <li className="footer-list-item">About Us</li>
                    <li className="footer-list-item">Contact</li>
                </ul>


            </section>


            <section className="footer-right">

            <ul className="footer-list-block">
                    <li className="footer-section-header">Policies</li>
                    <li className="footer-list-item">Privacy Policy</li>
                    <li className="footer-list-item">Cookie Policy</li>
                    <li className="footer-list-item">Terms Of Use</li>
                </ul>

            </section>


            <section className="footer-social-media">
                    <header className="footer-section-header-follow-us">Follow Us</header>
                    <div className="social-media-buttons-block"></div>
                
            </section>
        </footer>
    )
};

export default Footer;