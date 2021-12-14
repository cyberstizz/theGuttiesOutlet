import React, { useEffect } from 'react';
import './TestView.css';


const TestView = () => {

 useEffect(() => {

const picFetcher = async () => {
    const backendCall = fetch('http://localhost:5001/test')

    const responseBack = backendCall.text;

    
}

picFetcher;


 }, [])

    return(
        <div>this is the test view</div>
    )
}

export default TestView;