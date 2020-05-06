import React from "react"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function AddNewEntryButton(props) {
  const style = css`
    width: 215px;
    height: 50px;
    background-color: #dddddd;
    display: flex;
    color: var(--text-black);
    font-weight: 300;
    margin-right: auto;

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
      cursor: pointer;
    }
  `
  return (
    <div css={style} onClick={props.clickHandler}>
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
