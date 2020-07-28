import React from "react"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function AddNewEntryButton(props) {
  const style = css`
    background-color: #dddddd;
    display: flex;
    color: var(--text-black);
    font-weight: 300;

    .content-wrapper {
      display: flex;
      flex-direction: row;
      margin: 0 auto;
      align-items: center;
    }
    svg {
      width: 17px;
      margin-left: 15px;
    }
    &:hover {
      transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
      cursor: pointer;
      color: white;
      background-color: #59c9a0;
      & svg path {
        stroke: white;
        transition: stroke 200ms ease-in-out;
      }
    }
  `
  return (
    <div css={style} onClick={props.clickHandler} className="px-3 py-2 mr-4">
      <div className="content-wrapper">
        <span>Add New Entry</span>
        <svg viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.18333 0L9.18333 19M0 9.18333H19"
            stroke="#2E2E2E"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  )
}
