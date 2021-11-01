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
                
            </div>


            <div className='Right_Header'></div>

        </header>
    )
};

export default Header;