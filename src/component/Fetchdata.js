import React, { useEffect } from 'react';
import axios from 'axios';
function Fetechdata() {
    const getdata=async()=>{
        try{
            const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(resp)
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getdata();
    },[])
    return (<div>
        <h2>
            User List
        </h2>
    </div>);
}

export default Fetechdata;