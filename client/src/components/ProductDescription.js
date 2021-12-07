import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';



const ProductDescription = () => {

    const { productId } = useParams();

    const [data, setData] = useState();


    useEffect(() => {


        const callTheDatabase = async () => {
            const firstCall = await fetch(`http://localhost:5005/${productId}`)

            const theResponse = await firstCall.text()

            setData(theResponse);
        }

        callTheDatabase()
    })


    console.log(data)

    return (
        <div>{data}</div>
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