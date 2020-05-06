import React, { useState } from "react"
import ArtContainer from "../state/ArtContainer"

import DeleteEntryButton from "../DeleteEntryButton"
import SaveAndCloseButton from "../SaveAndCloseButton"
import QuickViewClose from "../QuickViewClose"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import EditableTextInput from "../EditableTextInput"
import EditableImage from "../EditableImage"
import AddOption from "../AddOption"
import EditableTextArea from "../EditableTextArea"

export default function EditView(props) {
  const GlobalState = ArtContainer.useContainer()
  const editItem = props.editItem

  const [objId, setObjId] = useState(editItem._id)
  const [title, setTitle] = useState(editItem.title)
  const [artist, setArtist] = useState(editItem.artist)
  const [imgSrc, setImgSrc] = useState(editItem.src)
  const [category, setCategory] = useState(editItem.category)
  const [type, setType] = useState(editItem.type)
  const [options, setOptions] = useState(editItem.options)
  const [tags, setTags] = useState(editItem.tags)
  const [age, setAge] = useState(new Date(editItem.age).toLocaleDateString())

  const [loading, setLoading] = useState(false)

  const tempOptions = [...options]

  const deleteHandler = async () => {
    const data = { _id: objId }
    const response = await fetch("http://localhost:3000/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    response.json().then(d => {
      props.refreshFetchedArtHandler()
      props.closeHandler()
      GlobalState.setShowToast(true)
    })
  }

  const saveHandler = async () => {
    const data = {
      _id: objId,
      title: title,
      artist: artist,
      src: imgSrc,
      category: category,
      type: type,
      options: options,
      tags: tags,
      age: age,
    }
    const response = await fetch("http://localhost:3000/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    response.json().then(d => {
      props.refreshFetchedArtHandler()
      props.closeHandler()
      GlobalState.setShowToast(true)
    })
  }

  const editStyle = css`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    font-family: Roboto;
    .inner-container {
      width: 100%;
      height: 100%;
      background-color: white;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      box-shadow: 0 35px 40px -25px rgba(0, 0, 0, 0.6);
      display: flex;
      flex-direction: column;
      padding-top: 25px;
    }
    .buttons-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      margin-bottom: 25px;
    }
    .quick-view-details {
      display: flex;
      flex-direction: column;
      margin: auto;
      max-width: 400px;
    }
    .editable-image-wrapper {
      position: relative;
      &:hover #change-photo-input-wrapper {
        visibility: visible;
      }
    }
    #change-photo-input-wrapper {
      background-color: white;
      font-weight: 300;
      position: absolute;
      padding: 10px;
      border-radius: 4px;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.5);
      visibility: hidden;
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
    .info-wrapper {
      margin: auto;
    }
    .heading-wrapper {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    .title {
      font-family: Sorts Mill Goudy;
      font-size: 1.5rem;
      color: var(--text-dark);
    }
    .by,
    .artist {
      color: var(--text-light-gray);
      font-size: 0.8rem;
    }
    .options-wrapper {
      display: flex;
      flex-direction: column;
      font-size: 0.8rem;
      color: var(--text-light-gray);
      width: 100%;
    }
    #options-label-wrapper {
      margin: 0 auto;
      width: 100%;
      & .label {
        width: 100%;
        text-align: center;
        color: var(--text-dark);
        font-weight: 500;
        font-size: 0.9rem;
      }
    }
    .option {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      &-sku,
      &-size,
      &-price {
        color: var(--text-dark);
        max-width: 30%;
      }

      &-sku,
      &-size {
        margin-right: 10px;
      }
    }
    .type-age-wrapper {
      & input {
        font-weight: 300;
        color: var(--text-dark);
        font-size: 0.8rem;
      }
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-left: 25px;
      margin-right: 25px;
      margin-bottom: 25px;
    }
    .tags-wrapper {
      margin: 0 50px;
      color: var(--text-dark);
    }
    .quick-view-img {
      width: 100%;
      box-shadow: 0 40px 20px -30px rgba(0, 0, 0, 0.8);
    }
    .quick-view-close-wrapper {
      position: absolute;
      width: 25px;
      top: 0;
      right: 10px;
      &:hover {
        cursor: pointer;
      }
      &:hover svg path {
        stroke: var(--text-dark);
      }
    }
    input {
      border: none;
      padding: 4px;
      border: solid 2px rgba(17, 153, 229, 0);
      text-align: center;
      border-radius: 4px;

      &:focus {
        box-shadow: inset 0 0 15px rgba(17, 153, 229, 0.25);
        border: solid 2px rgba(17, 153, 229, 0.5);
      }
    }

    @media (min-width: 794px) {
      .inner-container {
        width: 80%;
        height: 80%;
      }
      .buttons-wrapper {
        width: 300px;
        margin-top: auto;
        justify-content: space-between;
        margin-left: 50px;
      }
      .quick-view-img {
        width: 100%;
      }
      .editable-image-wrapper {
        width: 600px;
      }
      .quick-view-details {
        flex-direction: row;
        max-height: 80%;
        width: 100%;
        max-width: initial;
        margin-top: 0;
        padding: 0 50px;
      }
      .info-wrapper {
        margin: auto;
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        height: 200px;
      }
    }
  `

  return (
    <div
      css={editStyle}
      className="overlay"
      onClick={e => {
        if (e.target.classList.contains("overlay") && loading === false) {
          props.closeHandler()
        }
      }}
    >
      <div className="inner-container">
        <div className="buttons-wrapper">
          <DeleteEntryButton
            clickHandler={() => {
              if (!loading) {
                deleteHandler()
              }
            }}
          />
          <SaveAndCloseButton
            clickHandler={() => {
              if (!loading) {
                saveHandler()
              }
            }}
          />
        </div>
        <div className="quick-view-details">
          <QuickViewClose
            className="quick-view-close-wrapper"
            clickHandler={() => {
              if (!loading) {
                props.closeHandler()
              }
            }}
          />

          <EditableImage
            className="quick-view-img-wrapper"
            editItem={editItem}
            imgSrc={imgSrc}
            loadingHandler={val => {
              setLoading(val)
            }}
            loading={loading}
            stateHandler={val => {
              setImgSrc(val)
            }}
          />

          <div className="info-wrapper">
            <div className="heading-wrapper">
              <EditableTextInput
                className="title"
                value={title}
                changeHandler={val => {
                  setTitle(val)
                }}
              />
              <span className="by">by</span>
              <EditableTextInput
                className="artist"
                value={artist}
                changeHandler={val => {
                  setArtist(val)
                }}
              />
            </div>

            <div className="options-wrapper">
              <div className="option" id="options-label-wrapper">
                <span className="label">SKU</span>
                <span className="label">Size</span>
                <span className="label">Price</span>
              </div>
              {options.map(option => (
                <div className="option">
                  <EditableTextInput
                    className="option-sku"
                    value={option.sku}
                    changeHandler={val => {
                      tempOptions[options.indexOf(option)].sku = val
                      setOptions([...tempOptions])
                    }}
                  />
                  <EditableTextInput
                    className="option-size"
                    value={option.size}
                    changeHandler={val => {
                      tempOptions[options.indexOf(option)].size = val
                      setOptions([...tempOptions])
                    }}
                  />
                  <EditableTextInput
                    className="option-price"
                    value={option.price}
                    changeHandler={val => {
                      tempOptions[options.indexOf(option)].price = val
                      setOptions([...tempOptions])
                    }}
                  />
                </div>
              ))}
              <AddOption
                clickHandler={() => {
                  tempOptions.push({ sku: "", size: "", price: "" })
                  setOptions([...tempOptions])
                }}
              />
            </div>
          </div>
        </div>

        <div className="tags-wrapper">
          <span>Tags</span>
          <EditableTextArea
            value={tags}
            changeHandler={val => {
              setTags(val)
            }}
          />
        </div>

        <div className="type-age-wrapper">
          <div className="type-wrapper">
            <EditableTextInput
              className="type"
              value={type}
              changeHandler={val => {
                setType(val)
              }}
            />
          </div>
          <div className="age-wrapper">
            <EditableTextInput
              className="age"
              value={age}
              changeHandler={val => {
                setAge(val)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
