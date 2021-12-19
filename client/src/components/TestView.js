import React, { useEffect, useState } from 'react';
import './TestView.css';
import yeey from '../yeey.png';



const TestView = () => {

    const [ pic, setPic ] = useState()
    const [ name, setName ] = useState()
    const [ price, setPrice ] = useState()
    const [ description, setDescription ] = useState()


 useEffect(() => {

const picFetcher = async () => {
    const backendCall = await fetch('http://localhost:5001/test')

    const responseBack =  await backendCall.text();

    console.log(responseBack);


    const theStringConverted = /*Buffer.from(responseBack, 'base64')*/ atob(responseBack)

    console.log(theStringConverted);

    setPic(theStringConverted)





}

return picFetcher();


 }, [])

    return(
        <React.Fragment>
        <div>water</div>
        <img src={pic} className="theImport"/>

        </React.Fragment>
    )
}

export default TestView;