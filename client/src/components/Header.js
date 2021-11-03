import React from "react";
import './Header.css';
import 'font-awesome/css/font-awesome.min.css';

 const Header = () => {
    return(
        //first there will be a header element that houses three sub headers
        <header className='headerblock'>

            {/* inside there are three sub headers left center and right */}
            <div className='Left_Header'>

                {/* the left header contains the logo */}
                <div className='logo'> </div>
               <div> <i class="fad fa-user-circle"></i></div>
                <div id='signIn'> Sign In &#10140;</div>
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
                        <li className='navitem'>New Arrivals</li>
                        <li className='navitem'>Best Sellers</li>
                        <li className='navitem'>Winter</li>
                        <li className='navitem'>Discount</li>
                    </ul>
                </nav>

            </div>


            <div className='Right_Header'>

            <div id="cart">&#x1f6d2;</div>


                {/* the right header will have the cart icon and the login and logout buttons */}

            </div>

        </header>
    )
};

export default Header;