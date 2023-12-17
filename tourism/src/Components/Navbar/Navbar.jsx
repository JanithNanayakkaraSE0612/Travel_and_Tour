import React from 'react'
import './navbar.css'
import {MdTravelExplore} from 'react-icons/md'

const Navbar = () => {
  return (
    <section className='navBarSection'>
        <header className='header flex'>
            <div className="logoDiv">
                <a href="#" className='logo flex'>
                <h1><MdTravelExplore className='icon'/>..Travel.</h1>  
                </a>
            </div>
            <div className="navBar">
              <ul className="navList flex">
                <li className="navItem">
                  <a href="#" className="navLink">Home</a>
                </li>
                <li className="navItem">
                  <a href="#" className="navLink">Packages</a>
                </li>
                <li className="navItem">
                  <a href="#" className="navLink">Shop</a>
                </li>
                <li className="navItem">
                  <a href="#" className="navLink">About</a>
                </li>
                <li className="navItem">
                  <a href="#" className="navLink">Pages</a>
                </li>
              </ul>
            </div>
        </header>
    </section>
  )
}

export default Navbar
