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
      padding: 5px 10px;
      resize: none;
    }
  `
  return (
    <div css={style}>
      <textarea
      className="bg-light-light-gray rounded border-b-2 border-gray-500 outline-none focus:border-blue-200"
        value={props.value}
        onChange={e => {
          props.changeHandler(e.target.value)
        }}
      ></textarea>
    </div>
  )
}
