import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Data = () => {

    const [data,setData] = useState([])


    useEffect(()=>{
        const apiKey = '4fdea16a6b62e0ecc798ead97d1c4738';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${'Rajkot'}&appid=${apiKey}`;

        axios.get(url)
        .then((res)=>setData(res.data));
        

    },[])


    return (
        <>
        <p>{data.name}</p>
        <p>{data.sys?.country}</p>
        </>
    );
};

export default Data;

