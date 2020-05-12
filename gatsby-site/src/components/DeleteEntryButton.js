import React from "react"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function DeleteEntryButton(props) {
  const style = css`
    background-color: #DF5656;
    color: white;
    font-weight: 300;
    border: none;
    border-radius: 4px;
    box-shadow: 0 7px 5px -5px rgba(0, 0, 0, 0.5);
    padding: 10px;
    svg {
      margin-right: 5px;
      width: 12px;
    }
    &:hover {
      cursor: pointer;
    }
  `
  return (
    <button css={style} onClick={props.clickHandler}>
      <svg viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1L12 11.5M23 22L12 11.5M12 11.5L23 1L1 22"
          stroke="white"
          strokeWidth="3"
        />
      </svg>
      Delete Entry
    </button>
  )
}
