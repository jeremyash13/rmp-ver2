import React from "react"
import { useAuth } from "react-use-auth"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import FacebookLogo from "./FacebookLogo"
import InstagramLogo from "./InstagramLogo"
import { Link } from "gatsby"

export const Footer = () => {
  const { isAuthenticated, login, logout } = useAuth()
  return (
    <footer>
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
          <a href="https://www.facebook.com/rockymountainpublishing" className="my-auto sm:ml-8 mr-2">
            <FacebookLogo />
          </a>
          <a href="https://www.instagram.com/rocky_mountain_publishing" className="my-auto mr-2">
            <InstagramLogo />
          </a>
        </div>
        {!isAuthenticated() && (
          <span className="admin-login ml-auto my-auto cursor-pointer w-20 rounded h-max-content text-center px-2 py-1 border border-blackish hover:text-white hover:bg-blackish transition-colors duration-200" onClick={login}>
            Login
          </span>
        )}
        {isAuthenticated() && (
          <div className="flex space-x-2 ml-auto">
            <Link
              to="/admin/dashboard"
              className="admin-login w-20 my-auto rounded h-max-content px-2 py-1 text-center 
              hover:bg-blackish hover:text-white transition-colors duration-200 
              text-blackish border border-blackish hidden sm:block"
            >
              Dashboard
            </Link>
            <span
              className="admin-login w-20 my-auto rounded h-max-content px-2 py-1 text-center 
              text-blackish border border-blackish hover:bg-blackish cursor-pointer 
              hover:text-white transition-colors duration-200 hidden sm:block"
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
