import React from "react"

import { jsx, css } from "@emotion/core"
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

export default function CTA({ children }) {
  const wrapperStyle = css`
    background-color: white;
    padding-top: 25px;
  `

  const mainStyle = css`
    display: flex;
    border: solid 1px #2e2e2e;
    width: 200px;
    background-color: #ffffff;
    margin-left: auto;
    margin-right: auto;
    transition: background-color 250ms ease-in-out;
    & a {
      padding: 15px 0;
      width: 100%;
      text-align: center;
      text-decoration: none;
      color: var(--text-black);
      transition: color 250ms ease-in-out;
    }
    &:hover {
      cursor: pointer;
      background-color: var(--text-black);
      & a {
        color: white;
      }
    }
  `

  return (
    <div css={wrapperStyle}>
      <div css={mainStyle}>{children}</div>
    </div>
  )
}
