import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Logo from "./Logo"
import { FaBars, FaTimes } from "react-icons/fa"

// import CSS from "../css/Navbar.css"

import { jsx, css } from "@emotion/core"
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

const style = css`
  height: 100px;
  margin-top: 0.5rem;
  font-size: 14px;
  background-color: white;
  .logo__wrapper {
    width: 150px;
  }
  a {
    color: var(--text-light-gray);
    text-decoration: none;
  }
  .mobile-menu__ul {
    height: 100vh;
    font-family: roboto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 30px 25px;
    & li {
      margin: 15px 0;
      & a:hover {
        color: var(--text-black);
      }
    }
  }
  .desktop-menu__ul {
    height: 100%;
    font-size: 0.6rem;
    font-family: Roboto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    & li {
      margin: 0 5px;
      & a:hover {
        color: var(--text-black);
      }
    }
  }
  .menu-button {
    position: absolute;
    font-size: 45px;
    transform: translate(-50%, -50%);
    top: 35px;
    left: 35px;
    &:hover {
      cursor: pointer;
      color: red;
    }
  }
  @media (max-width: 600px) {
    .menu-button: {
      display: none;
    }
  }
  @media (min-width: 800px) {
    .desktop-menu__ul {
      font-size: 0.8rem;
    }
  }
`
export const Navbar = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const [vw, setVw] = useState(
    Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  )
  window.addEventListener("resize", () => {
    setVw(
      Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    )
  })
  const Menu = () => {
    if (vw < 601) {
      return (
        <>
          <ul className="mobile-menu__ul">
            <li className="nav__link--home">
              <Link to="/">HOME</Link>
            </li>
            <li className="nav__link--art">
              <Link to="/art/">GALLERY</Link>
            </li>
            <li className="nav__link--exclusive-artists">
              <Link to="/about/">EXCLUSIVE ARTISTS</Link>
            </li>
            <li className="nav__link--framing">
              <Link to="/about/">FRAMING</Link>
            </li>
            <li className="nav__link--contact">
              <Link to="/contact/">CONTACT/SHIPPING</Link>
            </li>
            <li className="nav__link--about-us">
              <Link to="/contact/">ABOUT US</Link>
            </li>
          </ul>
        </>
      )
    } else if (vw > 599) {
      setIsMenuOpen(true)
      return (
        <ul className="desktop-menu__ul">
          <li className="nav__link--home">
            <Link to="/">HOME</Link>
          </li>
          <li className="nav__link--art">
            <Link to="/gallery/">GALLERY</Link>
          </li>
          <li className="nav__link--exclusive-artists">
            <Link to="/about/">EXCLUSIVE ARTISTS</Link>
          </li>
          <li className="nav__link--logo">
            <Logo />
          </li>
          <li className="nav__link--framing">
            <Link to="/about/">FRAMING</Link>
          </li>
          <li className="nav__link--contact">
            <Link to="/contact/">CONTACT/SHIPPING</Link>
          </li>
          <li className="nav__link--about-us">
            <Link to="/contact/">ABOUT US</Link>
          </li>
        </ul>
      )
    }
  }

  return (
    <nav css={style} className={props.className}>
      {vw < 601 && (
        <div
          className="menu-button"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
        >
          {isMenuOpen ? "×" : "☰"}
        </div>
      )}
      {isMenuOpen ? <Menu /> : null}
    </nav>
  )
}

export default Navbar
