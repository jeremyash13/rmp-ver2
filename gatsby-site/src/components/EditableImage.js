import React, { useState } from "react"

import ArtContainer from "./state/ArtContainer"

export default function EditableImage(props) {
  const GlobalState = ArtContainer.useContainer()
  const [file, setFile] = useState(GlobalState.fetchedArt[props.editItem].src)
  const [fileName, setFileName] = useState(null)
  const [imgSrc, setImgSrc] = useState(
    GlobalState.fetchedArt[props.editItem].src
  )

  const uploadHandler = async () => {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("name", fileName)

    const response = await fetch("http://localhost:3000/s3", {
      method: "POST",
      body: formData,
    })
    const json = await response.json()
    const img = json.location
    setImgSrc(img)
  }
  return (
    <div className={props.className}>
      <label id="change-photo-input-wrapper">
        Change Photo
        <input
          type="file"
          id="change-photo-input"
          accept=".jpg, .jpeg"
          onChange={e => {
            setFileName(e.target.files[0].name)
            setFile(e.target.files[0])
            uploadHandler()
          }}
        ></input>
      </label>
      <img src={imgSrc} className="quick-view-img"></img>
    </div>
  )
}
