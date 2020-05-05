import React, { useState } from "react"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function EditableTextInput(props) {
  const style = css`
    width: 100%;
    height: 100%;
  `

  return (
    <>
      {props.children}
      <input
        css={style}
        type="text"
        className={props.className}
        value={props.value}
        onChange={e => {
          props.changeHandler(e.target.value)
        }}
      ></input>
    </>
  )
}
