import React from "react";
import './Header.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

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
 
                 <div id='signIn'> <i class="fa fa-user-circle-o" aria-hidden="true"></i> Sign In </div>
                 
             
                 
                  {/* cart icon */}
 
               <Link to='/Cart/;user'><span className="cart-icon"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</span></Link>
 
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
                 <div id='signIn'> <i class="fa fa-cog" aria-hidden="true"></i> Settings </div>
                 
             
                 
                 {/* cart icon */}
 
                <span className="cart-icon"><i class="fa fa-lock" aria-hidden="true"></i>    Logout</span>
            </div>
             </div>
 
         </header>
         <div class='signUpModal'></div>
         </React.Fragment>
    )
};

export default Header;