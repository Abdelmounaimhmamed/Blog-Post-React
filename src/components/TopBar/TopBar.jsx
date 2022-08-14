import React from 'react'
import "./TopBar.css";
import {Link} from "react-router-dom";

function TopBar() {
  const user = false;
  return (
    <div className='Top'>
        <div className='Topleft'>
            <i className="topicons fa-brands fa-square-facebook"></i>
            <i className="topicons fa-brands fa-linkedin"></i>
            <i className="topicons fa-brands fa-square-whatsapp"></i>
            <i className="topicons fa-solid fa-link"></i>
        </div>
        <div className='Topcenter'>
            <ul className='toplist'>
              <li className='topitem'>
              <a href="/">Home</a>
              </li>
              <li className='topitem'>
              <a href="/About">About</a>
              </li>
              <li className='topitem'>Contact</li>
              <li className='topitem'>
              <a href={user ? "/write": "/register" }>Write</a>
              </li>
              <li className='topitem'>{user ?  "Logout":  " "}</li>
            </ul>
        </div>
        <div className='Topright'>
          {user ? (
            <a >Logged</a>
          ): (
            <>
            <a href="/Login" className='log'>Login</a>
            <a href="/register"   className='log'>Register</a>
            </>
          ) }
        <i className="topsearch fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default TopBar