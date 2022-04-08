import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './ProductDescription.css';
import axios from 'axios';
import { addToCart } from './reducers/AddToCart';
import StripeCheckout from 'react-stripe-checkout';
import { connect, useDispatch, useSelector } from 'react-redux';

// creating the two functions that will be needed to connect this component to the store

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addToTheCart: (item) => {dispatch(addToCart(item))}
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         items: state.items
//     }
// }

const ProductDescription = () => {

//first thing is to initiate the state with useSelector

const statesItems = useSelector(state => state.items );

const dispatch = useDispatch();



    // we start out our component by  setting up ourt params and state hooks

    const { productId } = useParams();

    const [Name, setName] = useState('');

    const [Description, setDescription] = useState('');

    const [Price, setPrice] = useState(0);

    const [SneakerPath, setSneakerPath] = useState('');

    const [Quantity, setQuantity] = useState(1);
    
    const [item, setItem] = useState({});

    // next we defind a function to call the quantity hook

    const selectChangeHandler = (event) => {
        event.preventDefault();
        setQuantity(event.target.value);
    }

    //next is a function to handle the token property of the stripeCheckout component

    const handleToken = token => {
        console.log(token);

        const product = {
            name: Name,
            price: Price,
            description: Description,
            quantity: Quantity
        };

        const body = {
            token,
            product
        };

        const headers = {
            "Content-Type": "application/json"
        }


        return fetch('/payments', {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }).then(response => {
            const { status } = response;
            console.log(response)
        }).catch(error => console.log(error));

        }
            
    

    //we call the use effect function to run everytime there is an update


    useEffect(() => {

        // this function occurs every time a change takes place on the dom
       
        const callTheDatabase = async () => {
            
            // inside of this function their is a call to the database for the product details

            const firstCall = await axios.get(`/products/${productId}`)

            // after the call to the datase this next variable is the resolved promise that we will
            // used to destructure the data we need individually

            const firstCallResponse = await firstCall.data;

            console.log(firstCallResponse)

            // this is where we destructure for the name price description and path

            const { theName, thePrice, theDescription, theSneakerPath } = firstCallResponse;

            // and below we set these destructured variables to the useState variables to pass into
            // our preferred components

            setName(theName)
            setSneakerPath(theSneakerPath);
            setPrice(thePrice);
            setDescription(theDescription);
            setSneakerPath(theSneakerPath);

            // now creating a name object utilizing all of thes properties
            // to use for the Redux state
            setItem({
                name: theName,
                price: thePrice,
                description: theDescription,
                sneakerPath: theSneakerPath
            })

            // now this is where the function CallTheDatabase ends meaning it has not been called
        }

        // finally the function is called below becaause this function is only DEFINED in the useEffect
        // but we still have to call the function every time useEffect is called, so here it is...

        callTheDatabase()
    })

    // now a function to be called when a user clicks add to cart
    const handleClick = (item) => {
            //  props.addToTheCart(item)
            dispatch(addToCart(item))
    }

// and now below is the jsx of the actual component

    return (
        <React.Fragment>
            <Header />
        <main id="fullPageBlock">

        <section className="topBlock">
            {/*this is the picture*/}
            <img className="productPic" src={SneakerPath} />
            {/* this is the entire product purchase sections */}
            <section className="productPurchaseSection">
            {/* this block represents the right side with the buttons and details */}
            <div className="rightSectionBlock">
                {/* this section is for the title of the product */}
                <div className="purchaseSections" id="headline" style={{color: '#B48B22'}}>{Name}</div>
                {/* this section is for the price */}
                <div className="purchaseSections" id="price"><div style={{color: 'white', marginLeft: '5vw', "font-family": "'Permanent Marker', cursive"}}>Price:</div> <span style={{marginLeft: '1vw', "font-family": "'Permanent Marker', cursive"}}>${Price}</span></div>
                {/* this is the quantity section where the user can select their quantity via a dropdown */}
                <div className="purchaseSections" style={{marginLeft: '9vw', borderBottom: 'solid 3px #B48B22', width: '25vw', paddingBottom: '4px'}}> Quantity:
                      <select onChange={selectChangeHandler} style={{marginLeft: '1vw',backgroundColor:'#0D2A57', color: 'white', "font-family": "'Permanent Marker', cursive", height: '30px', width: '35px', fontSize: '26px', border:'solid 1px white'}}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>

                      </select>
                </div>
                {/* this section diplays the price */}
                <div className="purchaseSections" id="price"><div style={{color: 'green', marginLeft: '5vw', "font-family": "'Permanent Marker', cursive"}}><span style={{color: 'white', marginLeft: '-1.2vw'}}>Total:  </span>${!Quantity ? Price : (Price * Quantity)}</div> <span style={{marginTop: '1vh', marginLeft: '1vw'}}></span></div>
                {/* this div is for the estimated delivery */}
                 {/* and the two buttons are below */}
                <div className="buttonsDiv"><button id="purchaseButtonCart" onClick={() => handleClick(item)}>Add to cart</button> 
                <StripeCheckout 
                   stripeKey={'pk_test_51KD0MTBGolAm0YdrCJ4QlFJf3Bdv4WckkNGl6tKyrBvXE5GvP9WCWpOQEzyNT1wQD6zCKZQNj7AmDF1dRfWiZ7Y400CfbKGLoM'}
                   token={handleToken}
                   name={Name}
                   amount={Price * 100}
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

// creating an action to be dispatched to the redux store
// this action will receive a name object, that has all of the products properties



// export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription)
       
export default ProductDescription;


