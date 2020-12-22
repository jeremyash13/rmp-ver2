import React, { useState } from "react"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function EditableTextInput(props) {
  const style = css`
    color: var(--gold-text);
    font-family: Rosarivo, serif;
    display: flex;
    input {
      width: 100%;
      height: 100%;
      color: var(--gold-text-2);
      background: var(--dark-brown);
      &::placeholder {
        color: var(--text-dark);
        font-family: Roboto;
        font-weight: 300;
        font-size: 0.8rem;
      }
    }
  `

  return (
    <>
      {props.children}
      <div css={style}>
        <input
          type="text"
          className={`${props.className} bg-light-light-gray outline-none`}
          value={props.value}
          placeholder={props.placeholder}
          onChange={e => {
            if (!props.isReadOnly) {
              props.changeHandler(e.target.value)
            }
          }}
        ></input>
      </div>
    </>
  )
}
