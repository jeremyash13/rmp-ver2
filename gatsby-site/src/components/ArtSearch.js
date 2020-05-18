import React, { useState } from "react"

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import ArtContainer from "./state/ArtContainer"

export default function ArtSearch(props) {
  const GlobalState = ArtContainer.useContainer()
  const [value, setValue] = useState("")
  const style = css`
    font-family: Roboto;
    font-weight: 300;
    font-size: 1rem;
    color: #393939;
    width: 600px;
    position: relative;
    border: none;
    font-size: 1rem;
    height: min-content;
    margin-bottom: 15px;

    & input:focus {
      box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
    }
    & input::placeholder {
      font-style: italic;
      font-weight: 200;
    }

    input {
      width: 100%;
      padding-left: 40px;
      padding-top: 10px;
      padding-bottom: 10px;
      background-color: #dddddd;
      border: none;
      height: 50px;
    }
    svg {
      width: 15px;
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      left: 15px;
    }
    @media (min-width: 600px) {
      margin: 0;
    }
  `
  return (
    <div css={style} className={props.className}>
      <input
        value={value}
        className="art-navigation__input--search"
        type="text"
        placeholder="Search Item No, Title, Artist, Keyword"
        onChange={e => {
          setValue(e.target.value)
          GlobalState.handleArtSearch(e.target.value)
        }}
      ></input>
      <svg viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line
          y1="-1.5"
          x2="11.1409"
          y2="-1.5"
          transform="matrix(0.702103 0.712076 -0.702103 0.712076 12.6036 15.109)"
          stroke="#393939"
          strokeWidth="3"
        />
        <path
          d="M15.7729 9.10545C15.7729 13.0663 12.6106 16.2531 8.73937 16.2531C4.86813 16.2531 1.70587 13.0663 1.70587 9.10545C1.70587 5.14459 4.86813 1.95784 8.73937 1.95784C12.6106 1.95784 15.7729 5.14459 15.7729 9.10545Z"
          stroke="#393939"
          strokeWidth="2"
        />
      </svg>
    </div>
  )
}
