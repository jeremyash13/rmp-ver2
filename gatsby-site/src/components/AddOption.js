import React from "react"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function AddOption(props) {
  const style = css`
    width: 25px;
    &:hover {
      cursor: pointer;
      & svg rect {
        fill: #59c9a0;
        transition: fill 250ms ease-in-out;
      }
      & svg path {
        stroke: white;
        transition: stroke 250ms ease-in-out;
      }
    }
  `

  return (
    <div
      css={style}
      className="add-option-wrapper"
      onClick={props.clickHandler}
    >
      <svg viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="43" height="43" fill="#C4C4C4" />
        <path
          d="M22.5667 8L22.5667 34M10 20.5667H36"
          stroke="#565656"
          strokeWidth="3"
        />
      </svg>
    </div>
  )
}
