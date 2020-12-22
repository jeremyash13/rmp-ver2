import React from "react"
import { useAuth } from "react-use-auth"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import GoldLine from "../images/nav-bkg-line-gold-2.png"
import FacebookLogo from "./FacebookLogo"
import InstagramLogo from "./InstagramLogo"
import { Link } from "gatsby"
import LinkedInLogo from "./LinkedInLogo"

const style = css`
  color: var(--gold-text-2);
  z-index: 10;
  position: relative;
  background-color: var(--bg-dark-blue);
  & a {
    color: var(--gold-text-2);
  }
`

export const Footer = () => {
  const { isAuthenticated, login, logout } = useAuth()
  return (
    <footer css={style}>
      <img
        src={GoldLine}
        className="absolute left-1/2 transform -translate-x-1/2 z-10"
      ></img>
      <div className="footer-wrapper font-roboto text-xs p-4 flex">
        <div className="flex">
          <span className="copyright mr-10 sm:hidden">
            © RMP, inc.
            <br />
            All rights reserved.
          </span>
          <span className="copyright hidden sm:inline">
            © Rocky Mountain Publishing, inc.
            <br />
            All rights reserved.
          </span>
          <a
            href="https://www.facebook.com/rockymountainpublishing"
            className="my-auto sm:ml-8 mr-2"
          >
            <FacebookLogo />
          </a>
          <a
            href="https://www.instagram.com/rocky_mountain_publishing"
            className="my-auto mr-2"
          >
            <InstagramLogo />
          </a>
          <a
            href="https://www.linkedin.com/company/rocky-mountain-publishing/"
            className="my-auto mr-2"
          >
            <LinkedInLogo />
          </a>
        </div>
        {!isAuthenticated() && (
          <a
            className="admin-login ml-auto my-auto cursor-pointer w-20 h-max-content text-center px-2 py-1 transition-colors duration-200"
            onClick={login}
          >
            Login
          </a>
        )}
        {isAuthenticated() && (
          <div className="flex space-x-2 ml-auto">
            <Link
              to="/admin/dashboard"
              className="admin-login w-20 my-auto rounded h-max-content px-2 py-1 text-center 
              transition-colors duration-200 hidden sm:block"
            >
              Dashboard
            </Link>
            <a
              className="admin-login w-20 my-auto rounded h-max-content px-2 py-1 text-center 
              cursor-pointer transition-colors duration-200 hidden sm:block"
              onClick={logout}
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </footer>
  )
}
