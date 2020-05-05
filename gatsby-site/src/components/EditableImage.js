import React, { useState } from "react"

import ArtContainer from "./state/ArtContainer"
import ClipLoader from "react-spinners/ClipLoader"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function EditableImage(props) {
  const GlobalState = ArtContainer.useContainer()

  const [imgSrc, setImgSrc] = useState(props.editItem.src)
  // const [loading, setLoading] = useState(false)

  let file = null
  let fileName = null

  const uploadHandler = async formData => {
    const response = await fetch("http://localhost:3000/s3", {
      method: "POST",
      body: formData,
    })
    const json = await response.json()
    const img = json.location
    props.stateHandler(img)
    props.loadingHandler(false)
  }

  const inputChange = e => {
    props.loadingHandler(true)
    file = e.target.files[0]
    fileName = e.target.files[0].name

    const formData = new FormData()
    formData.append("file", file)
    formData.append("name", fileName)

    uploadHandler(formData)
  }

  const override = css`
    position: absolute;
    top: 50%;
    left: 50%;
  `
const style = css`

`
  return (
    <div css={style} className={props.className}>
      {!props.loading && (
        <label id="change-photo-input-wrapper">
          Change Photo
          <input
            type="file"
            id="change-photo-input"
            accept=".jpg, .jpeg"
            onChange={e => {
              inputChange(e)
            }}
          ></input>
        </label>
      )}
      <div className="editable-image-wrapper">
        <ClipLoader
          css={override}
          color={"#FF0000"}
          size={25}
          loading={props.loading}
        />
        <img src={props.imgSrc} className="quick-view-img"></img>
      </div>
    </div>
  )
}
