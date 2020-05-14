import React from "react"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function SaveAndCloseButton(props) {
  const style = css`
    background-color: #59C9A0;
    color: white;
    font-weight: 300;
    border: none;
    box-shadow: 0 7px 5px -5px rgba(0, 0, 0, 0.5);
    padding: 10px;
    svg {
      margin-right: 5px;
      width: 15px;
    }
    &:hover {
      cursor: pointer;
    }
  `
  return (
    <button css={style} onClick={props.clickHandler}>
      <svg viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 9.5L11.5 20L30 1.5" stroke="white" stroke-width="3" />
      </svg>
      Save & Close
    </button>
  )
}
