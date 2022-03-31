import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";

 const Footer = () => {
    return(

        <React.Fragment>

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


        {/* // now the mobile section */}

        <footer id="mobilefooterBlock">
             {/* now each individual section will be set to flex column */}

             {/* first section will contain the logo and year of conception */}

            <section className="mobilefooter-logo-section">


            <div className="mobilefooter-logo"> </div>

            <div className="mobilefooter-conception-year"> @2021 </div>

            </section>


            <section className="mobilefooter-left">

                <ul className="mobilefooter-list-block">
                    <li className="mobilefooter-section-header">sitemap</li>
                  <Link to='/'><li className="mobilefooter-list-item">Home</li></Link>
                  <Link to='/newArrivals'><li className="mobilefooter-list-item">New Arrivals</li></Link>
                  <Link to='/bestSellers'><li className="mobilefooter-list-item">Best Sellers</li></Link>
                  <Link to='/discounts'><li className="mobilefooter-list-item">Discount</li></Link>

                </ul>
            </section>


            <section className="mobilefooter-center">
            <ul className="mobilefooter-list-block">
                    <li className="mobilefooter-section-header">Company</li>
                    <li className="mobilefooter-list-item">About Us</li>
                    <li className="mobilefooter-list-item">Contact</li>
                </ul>


            </section>


            <section className="mobilefooter-right">

            <ul className="mobilefooter-list-block">
                    <li className="mobilefooter-section-header">Policies</li>
                    <li className="mobilefooter-list-item">Privacy Policy</li>
                    <li className="mobilefooter-list-item">Cookie Policy</li>
                    <li className="mobilefooter-list-item">Terms Of Use</li>
                </ul>

            </section>


            <section className="mobilefooter-social-media">
                    <div className="mobilesocial-media-buttons-block"></div>
                
            </section>
        </footer>
        </React.Fragment>
    )
};

export default Footer;