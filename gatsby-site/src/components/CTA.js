import React from "react"

import { jsx, css } from "@emotion/core"
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

export default function CTA({ children }) {
  const style = css`
    display: flex;
    border: solid 1px #2e2e2e;
    width: 200px;
    padding: 15px 0;
    background-color: #ffffff;
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto;
    &:hover {
      cursor: pointer;
    }
    & a {
      margin: auto;
      text-decoration: none;
      color: var(--text-black);
    }
  `

  return <div css={style}>{children}</div>
}
