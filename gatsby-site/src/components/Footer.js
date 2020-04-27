import React from "react"

import { jsx, css } from "@emotion/core"
import FacebookLogo from "./FacebookLogo"
import InstagramLogo from "./InstagramLogo"
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
export const Footer = () => {
  const style = css`
    .footer-wrapper {
      padding: 0 25px;
    }
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    li {
      font-family: Roboto;
      font-weight: 300;
      font-size: 14px;
      flex-grow: 1;
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
            <a className="admin-login">Admin</a>
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
