import React from "react"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function EditView(props) {
  const editStyle = css`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    .inner-container {
      width: 80vw;
      height: 80vh;
      background-color: white;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      
    }
  `

  return (
    <div
      css={editStyle}
      onClick={props => {
        // setShowEditView(false)
      }}
    >
      <div className="inner-container"></div>
    </div>
  )
}
