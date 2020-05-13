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
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 0;
  `
  const style = css`
    .quick-view-img {
      position: relative;
    }
  `

  return (
    <div className="editable-image-wrapper">
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
      <div css={override} className="loader-wrapper">
        <ClipLoader color={"rgba(0,0,0,.75)"} size={75} loading={props.loading} />
      </div>
      <img src={props.imgSrc} className="quick-view-img"></img>
    </div>
  )
}
