import React from "react"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function EditableTextArea(props) {
  const style = css`
    width: 100%;
    margin: 0 auto;
    textarea {
      color: var(--text-dark);
      font-weight: 300;
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 4px;
      background-color: lightgray;
      padding: 5px 10px;
    }
  `
  return (
    <div css={style}>
      <textarea
        value={props.value}
        onChange={e => {
          props.changeHandler(e.target.value)
        }}
      ></textarea>
    </div>
  )
}
