import React from 'react'
import { NavLink } from 'react-router-dom'

import './navbar.css'

export const NavBar = () => {


  let textInfo = "text-info"
  // let textUnderline ="text-decoration-underline"
  return (
    <nav className='navbar navbar-expand-md' >
        <div className='container-fluid d-flex flex-row-reverse'>
              <button className="navbar-toggler text-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
           <div className='container collapse navbar-collapse d-md-flex justify-content-md-end ' id="navbarSupportedContent">
           <ul className='navbar-nav  mb-2  text-center' >
           <li className='nav-item'>
                <NavLink to='/portfolio' className={ 'nav-link text-light'}
                      > 
                      {({ isActive }) => (
                        <span
                          className={
                            isActive ? textInfo : undefined
                          }
                        >
                          Home
                        </span>
                      )}                     
                      
                  </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/portfolio/about' className={ 'nav-link text-light'}
                      > 
                      {({ isActive }) => (
                        <span
                          className={
                            isActive ? textInfo : undefined
                          }
                        >
                          About
                        </span>
                      )}                     
                      
                  </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/portfolio/contact' className={ 'nav-link text-light'}
                      > 
                      {({ isActive }) => (
                        <span
                          className={
                            isActive ? textInfo : undefined
                          }
                        >
                          Contact
                        </span>
                      )}                     
                      
                  </NavLink>
              </li>
           </ul>
           </div>
        </div>
    </nav>
  )
}
