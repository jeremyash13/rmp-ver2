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
    .footer-wrapper {
      padding: 50px 50px;
    }
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    li {
      font-family: Roboto;
      font-weight: 300;
      font-size: 14px;
      flex-grow: 1;
    }
    a {
      text-decoration: none;
      color: var(--text-light-gray);
    }
    .copyright {
      flex-grow: 50;
    }
    .admin-login {
      color: var(--text-light-gray);
      &:hover {
        cursor: pointer;
      }
    }
    .facebook-logo {
      width: 10px;
      &:hover {
        cursor: pointer;
      }
    }
    .instagram-logo {
      width: 10px;
      &:hover {
        cursor: pointer;
      }
    }
  `
  return (
    <footer css={style}>
      <div className="footer-wrapper">
        <ul>
          <li className="copyright">
            © Rocky Mountain Publishing, inc. All rights reserved.
          </li>
          <li>
            {!isAuthenticated() && (
              <span className="admin-login" onClick={login}>
                Admin Login
              </span>
            )}
            {isAuthenticated() && (
              <>
                <Link to="/admin/dashboard" className="admin-login">
                  Admin Dashboard
                </Link>
                <span style={{marginLeft: '15px'}} className="admin-login" onClick={logout}>
                  Logout
                </span>
              </>
            )}
          </li>
          <li className="facebook-logo">
            <a>
              <FacebookLogo />
            </a>
          </li>
          <li className="instagram-logo">
            <a>
              <InstagramLogo />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
