import React, { useEffect,useState } from 'react';
function Counter() {
    const [count ,setcount] =useState(0);
    const increment=()=>{
        setcount(count+1);
    }
    const decrement=()=>{
        if(count<1){
            alert('count cannot be negative')
        }
        else{
            setcount(count-1);
        }
    }
    useEffect(()=>{
        console.log(count);
    },[count])
    return (<div>
        <h3>COUNTER BAR</h3>
        <h2>Count:{count}</h2>
        <button onClick={increment}>+</button><button onClick={decrement}>-</button>
    </div>);
}

export default Counter;