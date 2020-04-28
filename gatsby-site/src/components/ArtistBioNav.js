import React from "react"

import { jsx, css } from "@emotion/core"
import { Link } from "gatsby"
/** @jsx jsx */

export default function ArtistBioNav(props) {
  const style = css`
    font-weight: 300;
    color: var(--text-light-gray);
    font-size: 0.7rem;
    margin-bottom: 25px;
    .back-wrapper {
      display: flex;
      flex-direction: row;
      & svg {
        height: 8px;
        width: auto;
        align-self: center;
        margin-right: 5px;
      }
      & a {
        color: var(--text-light-gray);
        text-decoration: none;

        &:hover {
          color: var(--text-black);
          text-decoration: underline;
        }
      }
    }
  `
  return (
    <div css={style}>
      <div>{`Exclusive Artists > ${props.artist}`}</div>
      <div className="back-wrapper">
        <svg
          width="15"
          height="7"
          viewBox="0 0 15 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.6095 1L2.00001 3.48163L6.6095 5.96327" stroke="#848484" />
          <path d="M2.3521 3.4644H14.5" stroke="#848484" />
        </svg>
        <Link to="/artists">Back</Link>
      </div>
    </div>
  )
}
