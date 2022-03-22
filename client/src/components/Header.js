import React from "react";
import './Header.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
import axios from 'axios';

 const Header = () => {

    const scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 80) {
          document.getElementById("headerblock").style.height = "30vh";
          document.getElementById("navlist").style.height = "25vh";
        }
    }

    window.onscroll = scrollFunction()

    return(
        //first there will be a header element that houses three sub headers
        <React.Fragment>
        <header id='headerblock'>

            {/* inside there are three sub headers left center and right */}
            <div className='Left_Header'>

                {/* the left header contains the logo */}

              <section className="logo-signIn-block">

              <Link to='/'><div className='logo'> </div></Link>

                <div className="cart-signIn-block">

                <div id='signIn' onClick={() => {
                    const myself = document.getElementById("signIn")
                    myself.style.color = '#762FA0'
                 const thePop = document.getElementById("signUpModal")
                 setTimeout(() => myself.style.color = '#B48B22', 200)
                 thePop.style.visibility === 'hidden' ?  thePop.style.visibility = 'visible' : thePop.style.visibility = 'hidden'}}> <i class="fa fa-user-circle-o" aria-hidden="true"></i> Sign In </div>
            
                
                 {/* cart icon */}

              <Link to='/Cart/:user'><span className="cart-icon"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</span></Link>

                </div>
        
              </section>

    

            </div>

            <div className='Center_Header'>

                {/* the center header contains the search bar and the nav bar both will be block elements */}

                {/* the search bar will be placed within a form for easier access to the buttons input */}
                <form className="searchform" onSubmit=''>

                    <input id='searchbar' type='text' placeholder="search"></input>
                    <button id='searchbutton' type='submit' class="fa fa-search">
                    </button>
                </form>


                    {/* the nav bar will be below the search bar in the center of the header */}
                <nav>

                    {/* the nav will be organized into an unordered list */}
                    <ul id='navlist'>
                        <li className='navitem'>Home</li>
                        <li className='navitem'>New Arrivals</li>
                        <li className='navitem'>Best Sellers</li>
                        <li className='navitem'>Discount</li>
                    </ul>
                </nav>

            </div>


            <div className='Right_Header'>
           

            <div id="settingsLogoutBlock">
                {/* the right header will have the cart icon and the login and logout buttons */}
                <div id='settingsButton'> <i class="fa fa-cog" aria-hidden="true"></i> Settings </div>
                
            
                

               <div className="cart-icon" onClick={async () => { await axios.get('/logout')}}><i class="fa fa-lock" aria-hidden="true"></i>    Logout</div>
           </div>
            </div>

        </header>
        <div id="signUpModal">
        {/* this modal will contain seven divs for different sections */}

    {/* the first div is a container of two divs. one div is the word login and the other is an x out button */}
            <div className="signupTopContainer">
                <div className="loginText">Login</div>
                <button className="xOutButton" onClick={() => {
                 const thePop = document.getElementById("signUpModal")
                 thePop.style.visibility === 'hidden' ?  thePop.style.visibility = 'visible' : thePop.style.visibility = 'hidden'}}>&#9747;</button>


            </div>
            {/* next will be a form to sign in of course */}
            <form action="/login" method="POST" className="signInForm">
                <span className="usernameCaption">Username</span>
                <input type="text" className="signInUsername" placeholder="enter your username" name="username"></input>
                <span className="emailCaption">Email</span>
                <input type="text" className="signInPassword" placeholder="enter your email" name="password"></input>
                <input type="submit" className="signInButton"></input>


            </form>

            {/* finally a  text link at the bottom to register*/}


            <div className="createAccountLink" onClick={() => {
                 const theOut = document.getElementById("signOutModal")
                 theOut.style.visibility === 'hidden' ?  theOut.style.visibility = 'visible' : theOut.style.visibility = 'hidden'
                 
                 const thePop = document.getElementById("signUpModal")
                 thePop.style.visibility === 'hidden' ?  thePop.style.visibility = 'visible' : thePop.style.visibility = 'hidden'
                 
                 }}>New here? Click here to create an account</div>
        
        </div>

        {/* and another form to sign up */}
        <div id='signOutModal'>
            <form action="/register" method="POST" className="signUpForm">
                <span className="usernameCaption">Username</span>
                <input type="text" className="signInUsername" placeholder="create your username" name="username"></input>
                <span className="emailCaption">Email</span>
                <input type="text" className="signInPassword" placeholder="enter an email address" name="password"></input>
                <input type="submit" className="signInButton"></input>

            </form>

        </div>
        </React.Fragment>
    )
};

export default Header;