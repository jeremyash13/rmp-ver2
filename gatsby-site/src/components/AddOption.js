import React from "react"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function AddOption(props) {
  const style = css`
    width: 25px;
    margin-right: 10px;
    &:hover {
      & svg path {
        stroke: white;
        transition: stroke 200ms ease-in-out;
      }
    }
  `

  return (
    <div
      css={style}
      className="add-option-wrapper cursor-pointer bg-light-light-gray hover:bg-mint-green transition-colors duration-200 ease-in-out"
      onClick={props.clickHandler}
    >
      <svg viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22.5667 8L22.5667 34M10 20.5667H36"
          stroke="#565656"
          strokeWidth="3"
        />
      </svg>
    </div>
  )
}
