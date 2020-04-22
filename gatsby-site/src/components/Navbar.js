import React from "react"
import { Link } from "gatsby"
import Logo from "./Logo"
import ResponsiveMenu from "react-responsive-navbar"
import "../css/ResponsiveMenu.css"
import { FaBars, FaTimes } from 'react-icons/fa';

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
    height: 50px;
  }
  .nav__link--logo {
    height: 100%;
  }
  a {
    color: var(--text-light-gray);
    text-decoration: none;
  }
  ul {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
  }
  svg {
    height: 100%;
  }
`
export const Navbar = props => {
  return (
    <ResponsiveMenu
      menuOpenButton={<FaBars/>}
      menuCloseButton={<FaTimes/>}
      changeMenuOn="600px"
      largeMenuClassName="large-menu"
      smallMenuClassName="small-menu"
      menu={
        <ul className="main-nav__ul">
          <li className="nav__link--home">
            <Link to="/">HOME</Link>
          </li>
          <li className="nav__link--art">
            <Link to="/art/">GALLERY</Link>
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
      }
    />
  )
}
// <nav css={style} className={props.className}>
//   <ul className="main-nav__ul">
//     <li className="nav__link--home">
//       <Link to="/">HOME</Link>
//     </li>
//     <li className="nav__link--art">
//       <Link to="/art/">GALLERY</Link>
//     </li>
//     <li className="nav__link--exclusive-artists">
//       <Link to="/about/">EXCLUSIVE ARTISTS</Link>
//     </li>
//     <li className="nav__link--logo">
//       <Logo />
//     </li>
//     <li className="nav__link--framing">
//       <Link to="/about/">FRAMING</Link>
//     </li>
//     <li className="nav__link--contact">
//       <Link to="/contact/">CONTACT/SHIPPING</Link>
//     </li>
//     <li className="nav__link--about-us">
//       <Link to="/contact/">ABOUT US</Link>
//     </li>
//   </ul>
// </nav>

export default Navbar
