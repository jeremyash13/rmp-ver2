import React, { useEffect, useState } from "react"
import ArtContainer from "../state/ArtContainer"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import EditHover from "../EditHover"
import EditView from "./EditView"
import DeleteEntryButton from "../DeleteEntryButton"
import SaveAndCloseButton from "../SaveAndCloseButton"
import QuickViewClose from "../QuickViewClose"

export const ArtManagement = () => {
  const GlobalState = ArtContainer.useContainer()
  // useEffect(() => {
  //   let query = {
  //     type: ["all"],
  //     category: ["all"],
  //   }

  //   const fetchArt = new Promise(async (resolve, reject) => {
  //     try {
  //       // const url = "https://rmpdemo-backend.herokuapp.com/art"
  //       const url = "http://localhost:3000/art"
  //       const result = await fetch(url, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(query),
  //       })
  //       resolve(result)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   })
  //     .then(data => data.json())
  //     .then(json => {
  //       GlobalState.setFetchedArt(json)
  //     })
  // }, [])

  const [showEditView, setShowEditView] = useState(false)
  const [editItem, setEditItem] = useState(null)

  const style = css`
    max-width: 1268px;
    margin: 0 auto;
    background-color: #eae9e9;
    color: var(--text-black);
    .entry-wrapper {
      position: relative;
    }
    .entry-wrapper:hover {
      cursor: pointer;
      & .edit-hover-element {
        display: block;
      }
    }
    .entry-wrapper:nth-child(2n) {
      background-color: #dddddd;
    }
    thead tr {
      height: 78px;
      & .skus {
        padding-left: 30px;
      }
    }
    th {
      background-color: #dddddd;
      border: none;
      font-weight: 400;
      padding: 0;
      padding-left: 15px;
    }
    td {
      border: none;
      font-weight: 300;
      font-size: 0.9rem;
      padding: 0;
      padding-left: 15px;
    }
    .sku-item {
    }
  `

  const editStyle = css`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    font-family: Roboto;
    .inner-container {
      width: 80vw;
      height: 80vh;
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
    .quick-view-details {
      display: flex;
      flex-direction: column;
      margin: auto;
      max-width: 400px;
    }
    .quick-view-img-wrapper {
      margin: auto;
      margin-bottom: 25px;
      max-width: 400px;
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
      width: 70%;
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
    .option {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      &-sku,
      &-size,
      &-price {
        color: var(--text-dark);
      }

      &-sku,
      &-size {
        margin-right: 10px;
      }
    }
    .type-age-wrapper {
      color: var(--text-dark);
      font-size: 0.8rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-left: 25px;
      margin-right: 25px;
      margin-bottom: 25px;
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
      &:focus {
        box-shadow: inset 0 0 15px rgba(17, 153, 229, 0.25);
        border: solid 2px rgba(17, 153, 229, 0.5);
        border-radius: 4px;
      }
    }

    @media (min-width: 600px) {
      .quick-view-inner {
        max-width: 60vw;
        max-height: 70vh;
      }
      .quick-view-img-wrapper {
        margin-right: 25px;
        width: 100%;
        max-width: initial;
      }
    }
    @media (min-width: 794px) {
      .quick-view-details {
        flex-direction: row;
        max-height: 80%;
        max-width: 80%;
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
    <>
      <table css={style} id="art-management">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th className="skus">SKU's</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {GlobalState.fetchedArt.map(item => {
            return (
              <tr
                className="entry-wrapper"
                onClick={() => {
                  setShowEditView(true)
                  setEditItem(GlobalState.fetchedArt.indexOf(item))
                }}
              >
                <td className="title">
                  {item.title}
                  <EditHover />
                </td>
                <td className="artist">{item.artist}</td>
                <td className="sku-wrapper">
                  {item.options.map(i => (
                    <td className="sku-item">
                      <tr className="sku-code">{i.sku}</tr>
                      <tr className="size">{i.size}</tr>
                      <tr className="price">{i.price}</tr>
                    </td>
                  ))}
                </td>
                <td className="type">{item.type}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {showEditView && (
        <EditView idx={editItem} closeHandler={() => setShowEditView(false)} />
      )}
    </>
  )
}
