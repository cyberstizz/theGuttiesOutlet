import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './ProductDescription.css';
import yeey from '../yeey.png';
import axios from 'axios';



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


    useEffect(() => {


        const callTheDatabase = async () => {

            // const response = await axios.get('/home');

            // const responseComplete = await response.data;
        
            // console.log(responseComplete)
            // const { theName, thePrice, theDescription, theSneakerPath } = responseComplete;
            
            const firstCall = await axios.get(`/products/${productId}`)
            const firstCallResponse = await firstCall.data;

            const { theName, thePrice, theDescription, theSneakerPath } = firstCallResponse;

            console.log(theName)
            setName(theName)
            setSneakerPath(theSneakerPath);
            setPrice(thePrice);
            setDescription(theDescription);
            setSneakerPath(theSneakerPath);
        }

        callTheDatabase()
    })




    return (
        <React.Fragment>
            <Header />
        <main id="fullPageBlock">

        <section className="topBlock">
            {/*this is the picture*/}
            <img className="productPic" src={SneakerPath} />
            
            <section className="productPurchaseSection">
            <div className="rightSectionBlock">
                <div className="purchaseSections" id="headline">{Name}</div>
                <div className="purchaseSections" style={{textAlign: 'center'}}>{Description}</div>
                <div className="purchaseSections" id="price"><div style={{color: 'white', marginLeft: '5vw', "font-family": "'Permanent Marker', cursive"}}>Price:</div> <span style={{marginTop: '1vh', marginLeft: '1vw'}}>{Price}</span></div>
                <div className="purchaseSections" style={{marginLeft: '9vw'}}> Quantity:
                      <select onChange={selectChangeHandler} style={{marginLeft: '1vw',backgroundColor:'#0D2A57', color: '#B48B22'}}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>

                      </select>
                </div>
                <div className="purchaseSections" id="price"><div style={{color: 'green', marginLeft: '5vw', "font-family": "'Permanent Marker', cursive"}}>Total:{Price * quantity}</div> <span style={{marginTop: '1vh', marginLeft: '1vw'}}></span></div>

                <div className="purchaseSections">Est. Delivery: <span id="date">January 9th, 2022</span></div>
                <div className="buttonsDiv"><Link to={`cart/${productId}`}><button id="purchaseButtons">Add to cart</button></Link>  <button id="purchaseButtons">Buy now</button> </div>
                <div className="purchaseSections"></div>

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