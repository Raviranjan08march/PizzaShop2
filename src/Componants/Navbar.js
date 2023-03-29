import React,{useState} from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import reorder from "../Images/reorder.png"
// import ReorderIcon from '@mui/icons-material';
import pizzaLogo from "../Images/pizzaLogo.png"

 function Navbar() {
    const[openLinks,setOpenLinks]=useState(false);
     const toggleNavbar=()=>{
        setOpenLinks(!openLinks);
     }


  return (
    <div className='navbar'>
    <div className='leftSide' id={openLinks ? "open" : "close"}>
     <img src={pizzaLogo}  alt="" />
       <div className='hiddenLinks'>
       <Link to="/">Home</Link>
       <Link to="/menu">Menu</Link>
       <Link to="/about">About</Link>
       <Link to="/contact">Contact</Link>

       </div>
    </div>
      <div className='rightSide'>
         <Link to="/">Home</Link>
         <Link to="/menu">Menu</Link>
         <Link to="/about">About</Link>
         <Link to="/contact">Contact</Link>
         <button onClick={toggleNavbar}>
            <img src={reorder} />  
         </button>
      </div>
    </div>
  )
}

export default Navbar