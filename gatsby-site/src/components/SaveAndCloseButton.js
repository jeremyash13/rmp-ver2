import React from "react"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function SaveAndCloseButton(props) {
  const style = css`
    background-color: #dddddd;
    color: var(--text-black);
    font-weight: 300;
    border: none;
    padding: 10px;
    svg {
      margin-right: 5px;
      width: 15px;
      & path {
        stroke: var(--text-black);
      }
    }
    &:hover {
      cursor: pointer;
      background-color: #59c9a0;
      color: white;
      transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
      & svg path {
          stroke: white;
          transition: stroke 250ms ease-in-out;
        }
      }
    }
  `
  return (
    <button css={style} onClick={props.clickHandler}>
      <svg viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 9.5L11.5 20L30 1.5" stroke="white" strokeWidth="3" />
      </svg>
      Save & Close
    </button>
  )
}
