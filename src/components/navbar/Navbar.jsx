import React from 'react'
import './navbar.scss'
import logo from '../../img/lincor logo 1.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <div className="row mw lincor-navbar">
        <div className="col-lg-2 lincor-navbar-logo">
          <img src={logo} alt="" />
        </div>
        <div className="col-lg-8 lincor-navbar-navigation">
          <ul>
            <li>
              <Link to='/'>
                Darslar
              </Link>
            </li>
            <li>
              <Link to='/'>
                Topik
              </Link>
            </li>
            <li>
              <Link to='/'>
                Konsulting
              </Link>
            </li>
            <li>
              <Link to='/'>
                Kitoblar
              </Link>
            </li>
            <li>
              <Link to='/'>
                To`lov
              </Link>
            </li>
            <li>
              <Link to='/'>
                Biz haqimizda
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 lincor-navbar-sign">
          <Link to='/sign-in'>Kirish</Link>
          <Link to='/sign-up' className='sign-up'>Registratsiya</Link>
        </div>
      </div>
      <div className="navbar-background"></div>
    </>
  )
}
