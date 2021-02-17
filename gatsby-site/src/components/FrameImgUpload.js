import { useState } from "react"

import ArtContainer from "./state/ArtContainer"
import ClipLoader from "react-spinners/ClipLoader"
import ImagePlaceholder from "../images/img-placeholder.jpg"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function FrameImgUpload(props) {
  const GlobalState = ArtContainer.useContainer()
  const [loading, setLoading] = useState(false)

  let file = null
  let fileName = null

  const uploadHandler = async formData => {
    const url = GlobalState.s3Url
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    })
    const json = await response.json()
    const img = json.location
    // props.stateHandler(img)
    setLoading(false)
  }

  const inputChange = e => {
    setLoading(true)
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
      .gold-line {
      margin-top: 30px;
      margin-left: auto;
      margin-right: auto;
      width: 600px;
      height: 1px;
    }
    .editable-image-wrapper {
      ${'' /* position: relative;
      margin-bottom: 25px;
      display: flex;
      justify-content: center;
      max-height: 250px;
      &:hover #change-photo-input-wrapper {
        visibility: visible;
      } */}
    }
    #change-photo-input-wrapper {
      font-family: Sorts Mill Goudy, serif;
      padding: 10px;
      ${'' /* position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      z-index: 1; */}
      &:hover {
        cursor: pointer;
        & img {
          transition: opacity 250ms ease-out;
          opacity: 0.75;
        }
      }
    }
    #change-photo-input {
      visibility: hidden;
      width: 0px;
      height: 0px;
      padding: 0;
      border: none;
    }

    @media (min-width: 794px) {
       ${'' /* .buttons-wrapper {
        width: 300px;
        justify-content: space-between;
        margin-left: 25px;
      } 
      .editable-image-wrapper {
        max-height: 300px;
        margin-right: 25px;
      } */}
    }
  `

  return (
    <div css={style} className="editable-image-wrapper">
      {!loading ? (
        <label id="change-photo-input-wrapper" className="bg-light-light-gray">
          Upload Photo
          <input
            type="file"
            id="change-photo-input"
            accept=".jpg, .jpeg, .png"
            onChange={e => {
              inputChange(e)
            }}
          ></input>
        </label>
      ) : (
        <div css={override} className="loader-wrapper">
          <ClipLoader
            color={"rgba(0,0,0,.75)"}
            size={75}
            loading={props.loading}
          />
        </div>
      )}
      <img
        src={props.imgSrc || ""}
        className="quick-view-img"
        style={{ filter: "drop-shadow(1px 5px 5px #000000c7)" }}
      ></img>
    </div>
  )
}
