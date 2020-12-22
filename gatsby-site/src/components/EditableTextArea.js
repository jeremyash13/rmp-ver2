import React from "react"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function EditableTextArea(props) {
  const style = css`
    width: 100%;
    margin: 0 auto;
    color: var(--gold-text);
    font-family: Rosarivo, serif;
    textarea {
      color: var(--gold-text-2);
      background: var(--dark-brown);
      font-weight: 300;
      width: 100%;
      height: 100%;
      padding: 5px 10px;
      resize: none;
    }
  `
  return (
    <div css={style}>
    Tags
      <textarea
        className="outline-none"
        value={props.value}
        onChange={e => {
          props.changeHandler(e.target.value)
        }}
      ></textarea>
    </div>
  )
}
