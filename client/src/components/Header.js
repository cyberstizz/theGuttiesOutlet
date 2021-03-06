import React from "react";
import { useState, useEffect } from "react";
import './Header.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
import axios from 'axios';

 const Header = () => {



    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState('')
    const [initialLogin, setInitialLogin] = useState(false);
    const [showCookiePopup, setShowCookiePopup] = useState(false)
    const [searchField, setSearchField] = useState('')


    


    useEffect(() => {
        
        const mountCall = async () => {
        const response = await axios.get('/home');
    
        const login_Status = response.data.isLoggedIn;

        const current_User = response.data.user;


    
        console.log(`this is the current user: ${current_User}`)
    
        setIsLoggedIn(login_Status);

        setUser(current_User);

        setInitialLogin(response.data.initialLogin)

        setShowCookiePopup(response.data.ShowCookiePopup)
        }
    
        mountCall();
    })

    const handleSearchText = async (event) =>{
        event.preventDefault();
        const searchQuery = event.target.value;
        console.log(searchQuery)
        setSearchField(searchQuery);
    };


    // const scrollFunction = () => {
    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 80) {
    //       document.getElementById("headerblock").style.height = "30vh";
    //       document.getElementById("navlist").style.height = "25vh";
    //     }
    // }

    // window.onscroll = scrollFunction()
    // if (initialLogin == true){
    //     document.getElementById('LogInPopup').style.visibility = 'visible';
    //     // document.cookie = 'initialLogin=false'
    // } else{
    //     document.getElementById('LogInPopup').style.visibility = 'hidden';
    // }

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
                 const thePop = document.getElementById("signInModal")
                 setTimeout(() => myself.style.color = '#B48B22', 200)
                 thePop.style.visibility == 'hidden' ? thePop.style.visibility = 'visible' : thePop.style.visibility = 'visible'}}> <i class="fa fa-user-circle-o" aria-hidden="true"></i> Sign In </div>
            
                
                 {/* cart icon */}

              <Link to='/Cart/:user'><span className="cart-icon"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</span></Link>

                </div>
        
              </section>

    

            </div>

            <div className='Center_Header'>

                {/* the center header contains the search bar and the nav bar both will be block elements */}

                {/* the search bar will be placed within a form for easier access to the buttons input */}
                <div className="searchform">
                    <input id='searchbar' type='text' onChange={handleSearchText}></input>
                  <Link to={`/search/${searchField}`}><button id='searchbutton' type='submit' class="fa fa-search"></button></Link>
                </div>


                    {/* the nav bar will be below the search bar in the center of the header */}
                <nav>

                    {/* the nav will be organized into an unordered list */}
                    <ul id='navlist'>
                       <Link to='/'> <li className='navitem'>Home</li></Link>
                       <Link to='/newArrivals'> <li className='navitem'>New Arrivals</li></Link> 
                        <Link to='/bestSellers'><li className='navitem'>Best Sellers</li></Link>
                        <Link to='/discounts'><li className='navitem'>Discount</li></Link>
                    </ul>
                </nav>

            </div>
            <div className="ifLoggedIn"> { isLoggedIn && `Hello ${user}`}</div>

            <div className='Right_Header'>

            <div id="settingsLogoutBlock">
                {/* the right header will have the cart icon and the login and logout buttons */}
                <Link to='/settings'> <div id='settingsButton'> <i class="fa fa-cog" aria-hidden="true"></i>Settings </div></Link>

            
                

               <div id="logOutLink" onClick={() => {
                    const LogOutPopup = document.getElementById('LogOutPopup')
                    LogOutPopup.style.visibility = 'visible'
          
            }}><i class="fa fa-lock" aria-hidden="true"></i>    Logout</div>
           </div>
            </div>

        </header>
        <div id="signInModal">
        {/* this modal will contain seven divs for different sections */}

    {/* the first div is a container of two divs. one div is the word login and the other is an x out button */}
            <div className="signinTopContainer">
                <div className="loginText">Login</div>
                <button className="xOutButton" onClick={() => {
                 const thePop = document.getElementById("signInModal")
                 thePop.style.visibility === 'hidden' ?  thePop.style.visibility = 'visible' : thePop.style.visibility = 'hidden'}}>&#x2715;</button>


            </div>
            {/* next will be a form to sign in of course */}
            <form action="/login" method="POST" className="signInForm">
                <span className="usernameCaption">   User </span>
                <input type="text" className="signInUsername" placeholder="enter your username" name="username"></input>
                <span className="emailCaption">Email</span>
                <input type="text" className="signInPassword" placeholder="enter your email" name="password"></input>
                <input type="submit" className="insignInButton"></input>


            </form>

            {/* finally a  text link at the bottom to register*/}


            <div className="createAccountLink" onClick={() => {
                 const theOut = document.getElementById("signUpModal")
                 theOut.style.visibility === 'hidden' ?  theOut.style.visibility = 'visible' : theOut.style.visibility = 'visible'
                 
                 const thePop = document.getElementById("signInModal")
                 thePop.style.visibility === 'hidden' ?  thePop.style.visibility = 'visible' : thePop.style.visibility = 'hidden'
                 
                 }}>New here? Click here to create an account</div>
        
        </div>

        {/* and another form to sign up */}
        <div id='signUpModal'>
        <div className="signupTopContainer">
                <div className="loginText">Signup</div>
                <button className="xOutButton" onClick={() => {
                 const thePop = document.getElementById("signInModal")
                 thePop.style.visibility === 'hidden' ?  thePop.style.visibility = 'visible' : thePop.style.visibility = 'hidden'}}>&#x2715;</button>


            </div>
            <form action="/register" method="POST" className="signUpForm">
                <span className="usernameCaption"> User </span>
                <input type="text" className="signInUsername" placeholder="create your username" name="username"></input>
                <span className="emailCaption">Email</span>
                <input type="text" className="signInPassword" placeholder="enter an email address" name="password"></input>
                <input type="submit" className="upsignInButton" value="Join Gutties"></input>

            </form>

            <div className="closeLink" onClick={() => {
                 const theOut = document.getElementById("signUpModal")
                 theOut.style.visibility === 'visible' ?  theOut.style.visibility = 'hidden' : theOut.style.visibility = 'visible'
                
                 }}>Close</div>

        </div>


        {/* now  the creation of all fo the alerts/popups*/}

        <div id="LogOutPopup"> Are you sure you want to log out?
        
        <button class="insignInButton" onClick={async () => {
                    const loggingOut = document.getElementById("logOutLink")
                    loggingOut.style.color = '#762FA0'
                    setTimeout(() => loggingOut.style.color = '#B48B22', 200)

                    const response = await axios.post('/logout');

                    const login_Status = response.data.isLoggedIn;

                    setIsLoggedIn(login_Status);
                    const LogOutPopup = document.getElementById('LogOutPopup')
        LogOutPopup.style.visibility = 'visible' ? 'hidden' : 'hidden'
          
            }}>Log Out</button>
        <button class="insignInButton" onClick={() =>{ 
        const LogOutPopup = document.getElementById('LogOutPopup')
        LogOutPopup.style.visibility = 'visible' ? 'hidden' : 'hidden'


        }}>Stay Signed In</button>

        </div>
        { initialLogin && <div id="LogInPopup">
             You are now logged in as {user}
        <button onClick={() =>{ 
        document.cookie = 'initialLogin=false';
        const LogInPopup = document.getElementById('LogInPopup');
        LogInPopup.style.visibility = 'hidden';
        }}>Ok</button>
        
        </div>}
        
        <div id="RegisterPopup">I am the register popup</div>


        { showCookiePopup && <div id="cookiePopup">
             At gutties we use cookies to enhance your experience
        <button onClick={() =>{ 
        document.cookie = 'initialLogin=false';
        const cookiePopup = document.getElementById('cookiePopup');
        cookiePopup.style.visibility = 'hidden';
        }}>Ok</button>
        
        </div>}






        <header id='mobileHeaderblock'>

{/* inside there are three sub headers left center and right */}
<div className='mobileLeft_Header'>

    {/* the left header contains the logo */}

  <section className="mobilelogo-signIn-block">

  <Link to='/'><div className='mobilelogo'> </div></Link>

    <div className="mobilecart-signIn-block">

    <div id='mobilesignIn' onClick={() => {
        const myself = document.getElementById("mobilesignIn")
        myself.style.color = '#762FA0'
     const thePop = document.getElementById("mobilesignInModal")
     setTimeout(() => myself.style.color = '#B48B22', 200)
     thePop.style.visibility == 'hidden' ? thePop.style.visibility = 'visible' : thePop.style.visibility = 'visible'}}> <i class="fa fa-user-circle-o" aria-hidden="true"></i> </div>

    
     {/* cart icon */}

  <Link to='/Cart/:user'><span className="mobilecart-icon"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span></Link>

    </div>

  </section>



</div>

<div className='mobileCenter_Header'>

    {/* the center header contains the search bar and the nav bar both will be block elements */}

    {/* the search bar will be placed within a form for easier access to the buttons input */}
    <div className="mobilesearchform">
        <input id='mobilesearchbar' type='text' onChange={handleSearchText}></input>

      <Link to={`/search/${searchField}`}><button id='mobilesearchbutton' class="fa fa-search"></button></Link>
      </div>

        {/* the nav bar will be below the search bar in the center of the header */}
    <nav>

        <ul id='mobilenavlist'>
           <Link to='/'> <li className='mobilenavitem'>Home</li></Link>
           <Link to='/newArrivals'> <li className='mobilenavitem'>New </li></Link> 
            <Link to='/bestSellers'><li className='mobilenavitem'>Best </li></Link>
            <Link to='/discounts'><li className='mobilenavitem'>Discount</li></Link>
        </ul>
    </nav>

</div>
<div className="mobileifLoggedIn"> { isLoggedIn && `Hello ${user}`}</div>

<div className='mobileRight_Header'>

<div id="mobliesettingsLogoutBlock">
    {/* the right header will have the cart icon and the login and logout buttons */}
   <Link to='/settings'> <div id='mobilesettingsButton'> <i class="fa fa-cog" aria-hidden="true"></i> </div></Link>
    

    

   <div id="mobilelogOutLink" onClick={() => {
        const LogOutPopup = document.getElementById('mobileLogOutPopup')
        LogOutPopup.style.visibility = 'visible'

}}><i class="fa fa-lock" aria-hidden="true"></i></div>
</div>
</div>

</header>
<div id="mobilesignInModal">
{/* this modal will contain seven divs for different sections */}

{/* the first div is a container of two divs. one div is the word login and the other is an x out button */}
<div className="mobilesigninTopContainer">
    <div className="moblieloginText">Login</div>
    <button className="mobliexOutButton" onClick={() => {
     const thePop = document.getElementById("mobilesignInModal")
     thePop.style.visibility === 'hidden' ?  thePop.style.visibility = 'visible' : thePop.style.visibility = 'hidden'}}>&#x2715;</button>


</div>
{/* next will be a form to sign in of course */}
<form action="/login" method="POST" className="mobilesignInForm">
    <span className="mobileusernameCaption">   User </span>
    <input type="text" className="mobilesignInUsername" placeholder="enter your username" name="username"></input>
    <span className="mobileemailCaption">Email</span>
    <input type="text" className="mobilesignInPassword" placeholder="enter your email" name="password"></input>
    <input type="submit" className="mobileinsignInButton"></input>


</form>

{/* finally a  text link at the bottom to register*/}


<div className="mobilecreateAccountLink" onClick={() => {
     const theOut = document.getElementById("mobilesignUpModal")
     theOut.style.visibility === 'hidden' ?  theOut.style.visibility = 'visible' : theOut.style.visibility = 'visible'
     
     const thePop = document.getElementById("mobilesignInModal")
     thePop.style.visibility === 'hidden' ?  thePop.style.visibility = 'visible' : thePop.style.visibility = 'hidden'
     
     }}>New here? Click here to create an account</div>

</div>

{/* and another form to sign up */}
<div id='mobilesignUpModal'>
<div className="mobilesignupTopContainer">
    <div className="mobileloginText">Signup</div>
    <button className="mobilexOutButton" onClick={() => {
     const thePop = document.getElementById("mobilesignInModal")
     thePop.style.visibility === 'hidden' ?  thePop.style.visibility = 'visible' : thePop.style.visibility = 'hidden'}}>&#x2715;</button>


</div>
<form action="/register" method="POST" className="mobilesignUpForm">
    <span className="mobileusernameCaption"> User </span>
    <input type="text" className="mobilesignInUsername" placeholder="create your username" name="username"></input>
    <span className="mobileemailCaption">Email</span>
    <input type="text" className="mobilesignInPassword" placeholder="enter an email address" name="password"></input>
    <input type="submit" className="mobileupsignInButton" value="Join Gutties"></input>

</form>

<div className="mobilecloseLink" onClick={() => {
     const theOut = document.getElementById("mobilesignUpModal")
     theOut.style.visibility === 'visible' ?  theOut.style.visibility = 'hidden' : theOut.style.visibility = 'visible'
    
     }}>Close</div>

</div>


{/* now  the creation of all fo the alerts/popups*/}

<div id="mobileLogOutPopup"> Are you sure you want to log out?

<button class="mobileinsignInButton" onClick={async () => {
        const loggingOut = document.getElementById("mobilelogOutLink")
        loggingOut.style.color = '#762FA0'
        setTimeout(() => loggingOut.style.color = '#B48B22', 200)

        const response = await axios.post('/logout');

        const login_Status = response.data.isLoggedIn;

        setIsLoggedIn(login_Status);
        const LogOutPopup = document.getElementById('mobileLogOutPopup')
LogOutPopup.style.visibility = 'visible' ? 'hidden' : 'hidden'

}}>Log Out</button>
<button class="mobileinsignInButton" onClick={() =>{ 
const LogOutPopup = document.getElementById('mobileLogOutPopup')
LogOutPopup.style.visibility = 'visible' ? 'hidden' : 'hidden'


}}>Stay Signed In</button>

</div>
{ initialLogin && <div id="mobileLogInPopup">
 You are now logged in as {user}
<button onClick={() =>{ 
document.cookie = 'initialLogin=false';
const LogInPopup = document.getElementById('mobileLogInPopup');
LogInPopup.style.visibility = 'hidden';
}}>Ok</button>

</div>}

<div id="mobileRegisterPopup">I am the register popup</div>


{ showCookiePopup && <div id="mobilecookiePopup">
 At gutties we use cookies to enhance your experience
<button onClick={() =>{ 
document.cookie = 'initialLogin=false';
const cookiePopup = document.getElementById('mobilecookiePopup');
cookiePopup.style.visibility = 'hidden';
}}>Ok</button>

</div>}

        </React.Fragment>
    )
};

export default Header;