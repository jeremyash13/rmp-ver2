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
import Logo from "./Logo"

import { isIE } from "react-device-detect"

/** @jsx jsx */

const Layout = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const mainStyle = css`
    background-color: var(--bg-off-white);
    font-family: "Roboto";
    margin-top: 15px;
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
    top: 25px;
    left: 15px;
    z-index: 125;
    &:hover {
      cursor: pointer;
    }
    @media (min-width: 700px) {
      display: none;
    }
  `
  const mobileLogoStyle = css`
    max-width: 125px;
    margin: 15px auto 0 auto;
    @media (min-width: 700px) {
      display: none;
    }
  `

  const BrowserNotSupportedDesktop = () => {
    return (
      <div
        style={{
          height: "100px",
          width: "100%",
          backgroundColor: "#df5656",
          color: "white",
          fontSize: "2rem",
          padding: "25px",
          textAlign: "center",
        }}
      >
        Your browser is not supported. Please download{" "}
        <a href="https://www.microsoft.com/en-us/edge">Microsoft Edge,</a>{" "}
        <a href="https://www.google.com/chrome/">Google Chrome, </a> or{" "}
        <a href="https://www.mozilla.org/en-US/exp/firefox/new/">
          Mozilla Firefox
        </a>{" "}
        to view this site properly
      </div>
    )
  }
  const BrowserNotSupportedMobile = () => {
    return (
      <div
        style={{
          height: "100px",
          width: "100%",
          backgroundColor: "#df5656",
          color: "white",
          fontSize: "2rem",
          padding: "25px",
          textAlign: "center",
        }}
      >
        Your browser is not supported. Please download{" "}
        <a href="https://apps.apple.com/us/app/google-chrome/id535886823">
          Google Chrome,{" "}
        </a>{" "}
        or{" "}
        <a href="https://apps.apple.com/us/app/firefox-private-safe-browser/id989804926">
          Mozilla Firefox
        </a>{" "}
        to view this site properly
      </div>
    )
  }
  return (
    <>
      <button
        css={buttonStyle}
        onClick={() => {
          setMobileMenu(!mobileMenu)
        }}
      >
        {mobileMenu ? "×" : "≡"}
      </button>
      <div css={mobileLogoStyle}>
        <Logo />
      </div>
      {mobileMenu && <MobileNavMenu />}
      <Navbar />
      <main css={mainStyle}>
        {isIE && <BrowserNotSupportedDesktop />}
        {/* {isSafari && <BrowserNotSupportedDesktop />}
        {isMobileSafari && <BrowserNotSupportedMobile />} */}
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
