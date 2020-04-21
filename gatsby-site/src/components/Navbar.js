import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import { useAuth } from "react-use-auth"

import CSS from "../css/Navbar.css"
import { DropDownMenu } from "./DropDownMenu"

export const Navbar = props => {
  const { isAuthenticated, login, logout, user } = useAuth()
  const [buttonText, setButtonText] = useState(`Hi, ${user.nickname}`)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className={props.className}>
      <ul className="main-nav__ul">
        <li className="nav__link--home">
          <Link to="/">RMP</Link>
        </li>
        <li className="nav__link--art">
          <Link to="/art/">VIEW ART</Link>
        </li>
        <li className="nav__link--about">
          <Link to="/about/">ABOUT US</Link>
        </li>
        <li className="nav__link--contact">
          <Link to="/contact/">CONTACT</Link>
        </li>
        <li className="nav__link--login">
          {!isAuthenticated() && (
            <button className="button--login" onClick={() => login()}>
              LOG IN
            </button>
          )}
          {isAuthenticated() && (
            <>
              <button
                className="button--logout"
                // onMouseEnter={() => {
                //   setButtonText("Go Dashboard")
                // }}
                // onMouseLeave={() => {
                //   setButtonText(`Hi, ${user.nickname}`)
                // }}
                onClick={() => {
                  // navigate("/app/dashboard")
                  setIsMenuOpen(!isMenuOpen)
                }}
              >
                {buttonText}
              </button>
            {isMenuOpen && (
              <DropDownMenu/>
            )}
            </>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
