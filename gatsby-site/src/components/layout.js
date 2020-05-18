/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import "typeface-roboto"
import "typeface-sorts-mill-goudy"
import React, { useState } from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Navbar from "./Navbar"
import { jsx, css } from "@emotion/core"
import { Footer } from "./Footer"
import MobileNavMenu from "./MobileNavMenu"
import { FaBars, FaTimes } from "react-icons/fa"

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

const Layout = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const mainStyle = css`
    background-color: var(--bg-off-white);
    font-family: "Roboto";
    margin-top: 50px;
    @media (min-width: 700px) {
      margin-top: 0;
    }
  `
  const buttonStyle = css`
    background-color: rgba(255, 255, 255, 0);
    font-family: "Roboto";
    border: none;
    font-size: 3rem;
    color: var(--text-black);
    position: fixed;
    top: 10px;
    left: 0;
    z-index: 25;
    &:hover {
      cursor: pointer;
    }
    @media (min-width: 700px) {
      display: none;
    }
  `
  return (
    <>
      <button
        css={buttonStyle}
        onClick={() => {
          setMobileMenu(!mobileMenu)
        }}
      >{mobileMenu ? ('×'): ('≡')}
        
      </button>
      {mobileMenu && <MobileNavMenu />}
      <Navbar />
      <main css={mainStyle}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
