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
        className={props.className}
        value={props.value}
        placeholder={props.placeholder}
        onChange={e => {
          props.changeHandler(e.target.value)
        }}
      ></input>
    </>
  )
}
