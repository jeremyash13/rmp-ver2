import React from "react"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const style = css`
  path {
    transition: stroke .25s ease-in-out;
  }
  svg:hover path {
    stroke: var(--gold-text-2);
  }
`
export default function QuickViewClose(props) {
  return (
    <div className={props.className} onClick={props.clickHandler} css={style}>
      <svg viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 2L23 22.5M44 43L23 22.5M23 22.5L44 2L2 43"
          stroke="#2f2921"
          strokeWidth="5"
        />
      </svg>
    </div>
  )
}
