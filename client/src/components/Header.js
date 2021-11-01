import React from "react";
import './Header.css';


 const Header = () => {
    return(
        //first there will be a header element that houses three sub headers
        <header className='headerblock'>

            {/* inside there are three sub headers left center and right */}
            <div className='Left_Header'>

                {/* the left header contains the logo */}
                <div className='logo'> </div>
            </div>

            <div className='Center_Header'>

                {/* the center header contains the search bar and the nav bar both will be block elements */}

                {/* the search bar will be placed within a form for easier access to the buttons input */}
                <form onSubmit=''>

                    <input id='searchbar' type='text' placeholder="search"></input>
                    <input id='searchbutton' type='submit'></input>

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

                {/* the right header will have the cart icon and the login and logout buttons */}

            </div>

        </header>
    )
};

export default Header;