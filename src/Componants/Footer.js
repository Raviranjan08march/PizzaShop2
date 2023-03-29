import React from 'react'
import "./Footer.css"
import insta from "../Images/insta.png"
import twiter from "../Images/twiter.png";
import face from "../Images/face.png"
export default function Footer() {
  return (
    <div className='footer'>
       <div className='socialMedia'>
       <a  href='https://www.instagram.com/'>
        <img src={insta} /> 
        </a>
        <a href='https://twitter.com/ '>
          <img src={twiter} />
          </a>
          <a href='https://www.facebook.com/'>
          <img src={face} />
          </a>
       
       </div>
       <p>&Copy 2023 raviranjanshope.com</p>
    </div>
  )
}
