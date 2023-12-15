import React, { useState } from 'react';
function Conditionhandle() {
    const [isloggedin ,setLogin]=useState(true); 
    const handlelogin=()=>{
        setLogin(false);
    };
    const handlelogout=()=>{
        setLogin(true);
    };
    let button;
    if(isloggedin){
        button=<Loginbutton onClick={handlelogin}/>
    }
    else{
        button=<Logoutbutton onClick={handlelogout}/>
    }

    return <div>{button}</div>;
}

function Loginbutton(props){
    return (<button onClick={props.onClick}>Login
    </button>);
}
function Logoutbutton(props){
    return (<button onClick={props.onClick}>Logout
    </button>);
}
export default Conditionhandle;