import React from 'react'
import { NavLink } from 'react-router-dom'
import "../style/fotStyle.css"

const Footer = () => {
  return (
    <div className='f-container'>
        <div className="f-row">
          <div className="f-col">
          <h1 className='title'>ADNAN Garments</h1>
            <p>For the best quality of the Garments contact with us with the following</p>
          </div>
          <div className="f-col">
            <h2 className='links'>Quick Links</h2>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="f-col">
            <h2 className='category'>Category</h2>
            <ul>
              <li>
                <NavLink to="/">Men</NavLink>
              </li>
              <li>
                <NavLink to="/">Women</NavLink>
              </li>
              <li>
                <NavLink to="/">Kids</NavLink>
              </li>
            </ul>
          </div>
          <div className="f-col">
         <h2 className='social'>Stay in touch with us</h2>
            <div className="socials">
            <a href="/">
             <img src="/images/social/facebook.png" alt="" />
            </a>
            <a href="/">
              <img src="/images/social/instagram.png" alt="" />
            </a>
            <a href="/">
              <img src="/images/social/twitter.png" alt="" />
            </a>
            </div>
          </div>
        </div>
        <div className="f-copyrow">
            <p>&copy; 2022. All Rights Reserved. Powered by Miljan Peric.</p>
        </div>
    </div>
  )
}

export default Footer