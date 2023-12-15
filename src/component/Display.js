import React, { useState } from 'react';
function Display() {
    const [message, setMessage] = useState("");
    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(message);
    }
    return (
    <form onSubmit={onSubmit}>
        <label>Enter your Message : </label>
        <input value={message} onChange={(e)=>setMessage(e.target.value)}/>  
        <h4>Your message is : {message} </h4>
        <button type="submit">Submit</button>
    </form>
    )
   } 

export default Display;