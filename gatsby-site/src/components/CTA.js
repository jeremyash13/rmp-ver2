import React from "react"

import { jsx, css } from "@emotion/core"
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

export default function CTA({ children }) {
  const wrapperStyle = css`
    background-color: transparent;
    padding-top: 25px;
    padding-bottom: 1rem;
  `

  const outerStyle = css`
    display: flex;
    position: relative;
    z-index: 1;
    overflow: hidden;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    padding: 2px;
    box-shadow: 0 3px 30px rgba(0, 0, 0, 0.3);
    transition: box-shadow 1s ease-in-out;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 200%;
      background: linear-gradient(
        165deg,
        rgba(255, 223, 177, 1) 0%,
        rgba(255, 190, 92, 1) 30%,
        rgba(62, 42, 11, 1) 100%
      );
      transition: transform 0.7s ease-in-out;
      z-index: -1;
    }
    &:hover {
      cursor: pointer;
      box-shadow: 0 3px 30px rgba(255, 190, 92, 0.3),
        0 8px 10px -5px rgba(0, 0, 0, 0.9);
      &::before {
        transform: translateY(50%);
      }
      & a {
        color: var(--gold-2);
      }
    }
  `
  const innerStyle = css`
    width: 100%;
    & a {
      display: block;
      padding: 20px 0 15px 0;
      width: 100%;
      text-align: center;
      text-decoration: none;
      font-family: "Rosarivo", serif;
      color: #9d7d4c;
      transition: color 500ms linear;
    }
  `

  return (
    <div css={wrapperStyle}>
      <div css={outerStyle}>
        <div css={innerStyle} className="call-to-action-texture">
          {children}
        </div>
      </div>
    </div>
  )
}
