import React from "react"

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import ArtContainer from "./state/ArtContainer"

export default function ArtSearch(props) {
  const GlobalState = ArtContainer.useContainer()

  const style = css`
    font-family: Roboto;
    font-weight: 300;
    font-size: 1rem;
    color: var(--gold-text);
    width: 100%;
    position: relative;
    border: none;
    font-size: 1rem;

    & input:focus {
      ${"" /* box-shadow: inset 0 0 4px var(--gold-2); */}
      ${"" /* background-color: var(--gold-text); */}
    }
    & input::placeholder {
      font-style: italic;
      font-weight: 200;
      color: var(--gold-2);
    }

    input {
      width: 100%;
      padding-left: 40px;
      padding-top: 10px;
      padding-bottom: 10px;
      background-color: #2f2921;
      border: solid 1px #40362a;
      transition: border .3s ease-in-out;
      &:focus {
        border: solid 1px var(--gold-text-2);
      }
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
        value={GlobalState.artSearch}
        className="art-navigation__input--search h-full"
        type="text"
        placeholder="Search Item No, Title, Artist, Keyword"
        onChange={e => {
          GlobalState.setArtSearch(e.target.value)
        }}
      ></input>
      <svg viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line
          y1="-1.5"
          x2="11.1409"
          y2="-1.5"
          transform="matrix(0.702103 0.712076 -0.702103 0.712076 12.6036 15.109)"
          stroke="var(--gold-text-2)"
          strokeWidth="3"
        />
        <path
          d="M15.7729 9.10545C15.7729 13.0663 12.6106 16.2531 8.73937 16.2531C4.86813 16.2531 1.70587 13.0663 1.70587 9.10545C1.70587 5.14459 4.86813 1.95784 8.73937 1.95784C12.6106 1.95784 15.7729 5.14459 15.7729 9.10545Z"
          stroke="var(--gold-text-2)"
          strokeWidth="2"
        />
      </svg>
    </div>
  )
}
