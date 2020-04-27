import React, { useRef } from "react"

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function ArtSearch(props) {
  const inputRef = useRef()
  const style = css`
    font-family: Roboto;
    font-weight: 300;
    font-size: 1rem;
    color: #393939;
    width: 100%;
    position: relative;
    border: none;
    @media (min-width: 600px) {
      
    }
    input {
      width: 100%;
      padding-left: 40px;
      padding-top: 10px;
      padding-bottom: 10px;
      background-color: #eae9e9;
      border: none;
    }
    svg {
      width: 15px;
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      left: 15px;
    }
  `
  return (
    <div css={style} className={props.className}>
      <input
        className="art-navigation__input--search"
        type="text"
        ref={inputRef}
        placeholder="Search Item No, Title, Artist, Keyword"
      ></input>
      <svg
        width="23"
        height="24"
        viewBox="0 0 23 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          y1="-1.5"
          x2="11.1409"
          y2="-1.5"
          transform="matrix(0.702103 0.712076 -0.702103 0.712076 12.6036 15.109)"
          stroke="#393939"
          stroke-width="3"
        />
        <path
          d="M15.7729 9.10545C15.7729 13.0663 12.6106 16.2531 8.73937 16.2531C4.86813 16.2531 1.70587 13.0663 1.70587 9.10545C1.70587 5.14459 4.86813 1.95784 8.73937 1.95784C12.6106 1.95784 15.7729 5.14459 15.7729 9.10545Z"
          stroke="#393939"
          stroke-width="2"
        />
      </svg>
    </div>
  )
}
