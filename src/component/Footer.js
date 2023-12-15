import React ,{useState} from "react";

function Footer() {
  const [name,setName] = useState('aakash reddy');
  const Handlechange=(e)=>{
    setName(e.target.value)
  }
  return (<div>
    <h2>Hello {name}</h2>
    <input type="text" value={name} placeholder="enter the Name" onChange={Handlechange}/>
  </div>
  );
}

export default Footer;