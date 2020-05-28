import React from "react"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function DeleteEntryButton(props) {
  const style = css`
    color: var(--text-black);
    background-color: #dddddd;
    font-weight: 300;
    border: none;
    padding: 10px;
    svg {
      margin-right: 5px;
      width: 12px;
      & path {
        stroke: var(--text-black);
      }
    }
    &:hover {
      cursor: pointer;
      background-color: #df5656;
      color: white;
      transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
      & svg path {
        stroke: white;
        transition: stroke 250ms ease-in-out;
      }
    }
  `
  return (
    <button css={style} onClick={props.clickHandler} className="flex items-center">
      <svg viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1L12 11.5M23 22L12 11.5M12 11.5L23 1L1 22"
          stroke="white"
          strokeWidth="3"
        />
      </svg>
      <span>Delete Entry</span>
    </button>
  )
}
