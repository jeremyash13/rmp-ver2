import React from "react"
import { useAuth } from "react-use-auth"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import FacebookLogo from "./FacebookLogo"
import InstagramLogo from "./InstagramLogo"
import { Link } from "gatsby"

export const Footer = () => {
  const { isAuthenticated, login, logout } = useAuth()
  const style = css`
    margin-top: auto;
    
    }
    a {
      text-decoration: none;
    }
    
  `
  return (
    <footer css={style}>
      <div className="footer-wrapper font-roboto text-xs p-4 flex">
        <div className="flex space-x-1">
          <span className="copyright mr-10">
            © Rocky Mountain Publishing, inc.
            <br />
            All rights reserved.
          </span>
          <a href="https://www.facebook.com/rockymountainpublishing" className="">
            <FacebookLogo />
          </a>
          <a href="https://www.instagram.com/rocky_mountain_publishing" className="">
            <InstagramLogo />
          </a>
        </div>
        {!isAuthenticated() && (
          <span className="admin-login cursor-pointer" onClick={login}>
            Login
          </span>
        )}
        {isAuthenticated() && (
          <div className="flex space-x-2 ml-auto">
            <Link
              to="/admin/dashboard"
              className="admin-login w-20 rounded h-max-content px-2 py-1 text-center hover:bg-blackish hover:text-white transition-colors duration-200 text-blackish border border-blackish"
            >
              Dashboard
            </Link>
            <span
              className="admin-login w-20 rounded h-max-content px-2 py-1 text-center text-blackish border border-blackish hover:bg-blackish cursor-pointer hover:text-white transition-colors duration-200"
              onClick={logout}
            >
              Logout
            </span>
          </div>
        )}
      </div>
    </footer>
  )
}
