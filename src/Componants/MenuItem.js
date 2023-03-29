import React from 'react'
import "./MenuItem.css";
 function MenuItem({image,name,price}) {
  return (
    <div className='menuitem'>
    <div style={{backgroundImage: `url(${image})`}}></div>
      <h1> {name} </h1>
      <p> ${price} </p>
      
    </div>
  )
}
export default MenuItem;