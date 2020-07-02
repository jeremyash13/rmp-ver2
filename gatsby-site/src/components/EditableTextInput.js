import React, { useState } from "react"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function EditableTextInput(props) {
  const style = css`
    width: 100%;
    height: 100%;
    &::placeholder {
      color: var(--text-dark);
      font-family: Roboto;
      font-weight: 300;
      font-size: 0.8rem;
    }
  `

  return (
    <>
      {props.children}
      <input
        css={style}
        type="text"
        className={`${props.className} bg-light-light-gray rounded border-b-2 border-gray-500 outline-none focus:border-blue-200`}
        value={props.value}
        placeholder={props.placeholder}
        onChange={e => {
          if (!props.isReadOnly) {
            props.changeHandler(e.target.value)
          }
        }}
      ></input>
    </>
  )
}
