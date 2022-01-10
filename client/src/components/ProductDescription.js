import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './ProductDescription.css';
import yeey from '../yeey.png';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';



const ProductDescription = () => {

    const { productId } = useParams();

    const [Name, setName] = useState('');

    const [Description, setDescription] = useState('');

    const [Price, setPrice] = useState();

    const [SneakerPath, setSneakerPath] = useState('');

    const [quantity, setQuantity] = useState();

    

    const selectChangeHandler = (event) => {
        event.preventDefault();
        setQuantity(event.target.value)

    }

    const handleToken = (token, addresses) => {
        console.log(token)

    }


    useEffect(() => {

        // this function occurs every time a change takes place on the dom
       
        const callTheDatabase = async () => {
            
            // inside of this function their is a call to the database for the product details

            const firstCall = await axios.get(`/products/${productId}`)

            // after the call to the datase this next variable is the resolved promise that we will
            // used to destructure the data we need individually

            const firstCallResponse = await firstCall.data;

            // this is where we destructure for the name price description and path

            const { theName, thePrice, theDescription, theSneakerPath } = firstCallResponse;

            // and below we set these destructured variables to the useState variables to pass into
            // our preferred components

            setName(theName)
            setSneakerPath(theSneakerPath);
            setPrice(thePrice);
            setDescription(theDescription);
            setSneakerPath(theSneakerPath);

            // now this is where the function CallTheDatabase ends meaning it has not been called
        }

        // finally the function is called below becaause this function is only DEFINED in the useEffect
        // but we still have to call the function every time useEffect is called, so here it is...

        callTheDatabase()
    })




    return (
        <React.Fragment>
            <Header />
        <main id="fullPageBlock">

        <section className="topBlock">
            {/*this is the picture*/}
            <img className="productPic" src={SneakerPath} />
            {/* this is the entire product purchase sections */}
            <section className="productPurchaseSection">
            {/* this block represents the left side with the buttons and details */}
            <div className="rightSectionBlock">
                {/* this section is for the title of the product */}
                <div className="purchaseSections" id="headline" style={{color: '#2c972c'}}>{Name}</div>
                {/* this section is for the price */}
                <div className="purchaseSections" id="price"><div style={{color: 'black', marginLeft: '5vw', "font-family": "'Permanent Marker', cursive"}}>Price:</div> <span style={{marginLeft: '1vw', "font-family": "'Permanent Marker', cursive"}}>${Price}</span></div>
                {/* this is the quantity section where the user can select their quantity via a dropdown */}
                <div className="purchaseSections" style={{marginLeft: '9vw', borderBottom: 'solid 3px #2c972c', width: '25vw', paddingBottom: '4px'}}> Quantity:
                      <select onChange={selectChangeHandler} style={{marginLeft: '1vw',backgroundColor:'rgb(83, 16, 16)', color: '#B48B22', "font-family": "'Permanent Marker', cursive", height: '30px', width: '35px', fontSize: '26px', border:'solid 1px #0D2A57'}}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>

                      </select>
                </div>
                {/* this section diplays the price */}
                <div className="purchaseSections" id="price"><div style={{color: 'green', marginLeft: '5vw', "font-family": "'Permanent Marker', cursive"}}><span style={{color: 'black', marginLeft: '-1.2vw'}}>Total:  </span>${!quantity ? Price : (Price * quantity)}</div> <span style={{marginTop: '1vh', marginLeft: '1vw'}}></span></div>
                {/* this div is for the estimated delivery */}
                <div className="purchaseSections">Est. Delivery: <span id="date">January 18th, 2022</span></div>
                 {/* and the two buttons are below */}
                <div className="buttonsDiv"><Link to={`cart/${productId}`}><button id="purchaseButtonCart">Add to cart</button></Link> 
                < StripeCheckout 
                   stripeKey={process.env.StripePublicKey}
                   token={handleToken}
                   amount={Price * 100}
                   name={Name}
                  billingAddress
                  shippingAddress
                > 
                <button id="purchaseButtonBuy">Buy now</button>
                </StripeCheckout>
                </div>
            </div>

            </section>
        </section>


        <section className="middleBlock"></section>
        <section className="bottomBlock"></section>


        </main>

        </React.Fragment>

    )
}
        // the first div will be the header block that contains the picture of the item as well as the name and minor details like product id
        // <div className="product_header_block">

            /* inside there will be two divs representing the left and right side of the header,
             the left side will the product image, while the right side will contain two sections: set to 
             flex column with the name and other product info. */


             /* product image */
            /* <div className="product_image"> </div> */


            /* product details */
            /* <div className="product_details">


                
            </div> */

//         </div>
//     )
// }

export default ProductDescription;