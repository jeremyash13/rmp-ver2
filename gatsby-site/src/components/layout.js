/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import "typeface-roboto";
import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Navbar from "./Navbar"
import { jsx, css } from "@emotion/core"
import { Footer } from "./Footer";

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
const style = css`
  background-color: var(--bg-off-white);
  font-family: "Roboto";
`

const Layout = ({ children }) => {
  return (
    <>
      <Navbar className="main-nav" />
      <main css={style}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
