import { useEffect, useState } from "react"
import ArtContainer from "../state/ArtContainer"
import useSearchArt from "../hooks/useSearchArt"
import { Table, Column, AutoSizer } from "react-virtualized"
import "react-virtualized/styles.css"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import EditHover from "../EditHover"
import EditView from "./EditView"
import Toast from "../Toast"
import ClipLoader from "react-spinners/ClipLoader"
import AddNewEntryButton from "../AddNewEntryButton"

let editItem = undefined

export const ArtDatabaseView = ({ newEntryClickHandler }) => {
  const GlobalState = ArtContainer.useContainer()
  const [showEditView, setShowEditView] = useState(false)
  const { loading, art, error, hasMore, resetArtFilter } = useSearchArt(1000)
  const [showNewEntryView, setShowNewEntryView] = useState(false)

  useEffect(() => {
    resetArtFilter()
  }, [])

  const mainStyle = css`
    background-color: #eae9e9;
    margin-top: 25px;
    .entry-wrapper {
      position: relative;
    }
    .entry-wrapper:hover {
      cursor: pointer;
      & .edit-hover-element {
        display: block;
      }
    }
    .sku-wrapper {
      display: flex;
    }
    .sku-item {
      margin-right: 25px;
    }
    .th-artist {
      min-width: 200px;
    }
    tbody {
      & .entry-wrapper:nth-of-type(2n) {
        background-color: #dddddd;
      }
    }
    thead tr {
      height: 78px;
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
  `
  const wrapperStyle = css`
    min-height: 100vh;
    color: var(--gold-text-2);

    .table-header {
      color: var(--gold-text);
      font-family: "Rosarivo", serif;
      letter-spacing: 0.08rem;
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
  const loaderStyle = css`
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
    left: 50%;
    top: 50%;
  `

  return (
    <div css={wrapperStyle} className="art-management-wrapper">
      {GlobalState.showToast && <Toast message="Update Successful" />}
      <AddNewEntryButton clickHandler={() => setShowNewEntryView(true)} />
      {loading ? (
        <div className="w-max-content mx-auto">
          <ClipLoader loading={true} />
        </div>
      ) : (
        <AutoSizer>
          {({ width, height }) => (
            <Table
              width={width}
              height={height}
              headerHeight={40}
              rowHeight={60}
              rowCount={art.length}
              rowGetter={({ index }) => art[index]}
              headerClassName="table-header"
              onRowClick={e => {
                editItem = e.rowData
                setShowEditView(true)
              }}
            >
              <Column label="Title" dataKey="title" width={300} />
              <Column label="Artist" dataKey="artist" width={300} />
              <Column label="Type" dataKey="type" width={300} />
            </Table>
          )}
        </AutoSizer>
      )}

      {art.length === 0 && loading === false && (
        <div className="w-max-content mx-auto text-4xl">NO RESULTS...</div>
      )}
      {showEditView && (
        <EditView
          editItem={editItem}
          closeHandler={() => setShowEditView(false)}
          refreshFetchedArtHandler={() => {
            GlobalState.setRefreshArt(prevState => prevState++)
          }}
        />
      )}
      {showNewEntryView && (
        <EditView
          editItem={null}
          closeHandler={() => setShowNewEntryView(false)}
          refreshFetchedArtHandler={() => {
            GlobalState.setRefreshArt(prevState => prevState++)
          }}
        />
      )}
    </div>
  )
}
{
  /* <div css={wrapperStyle} className="art-management-wrapper">
  {GlobalState.showToast && <Toast message="Update Successful" />}
    <table css={mainStyle} id="art-management">
      <thead>
        <tr>
          <th>Title</th>
          <th className="th-artist">Artist</th>
          <th>SKU's</th>
          <th>Type</th>
        </tr>
      </thead>
      {loading ? (
        <div css={loaderStyle}>
          <ClipLoader loading={true} />
        </div>
      ) : (
        <tbody>
          {art.map(item => {
            return (
              <tr
                key={item._id}
                className="entry-wrapper"
                onClick={() => {
                  setShowEditView(true)
                  editItem = art.indexOf(item)
                }}
              >
                <td className="title">
                  {item.title}
                  <EditHover />
                </td>
                <td className="artist">{item.artist}</td>
                <td className="sku-wrapper">
                  {item.options.map(i => (
                    <div
                      className="sku-item"
                      key={i.code + i.size + i.price}
                    >
                      <div className="sku-code">{i.code}</div>
                      <div className="size">{i.size}</div>
                      <div className="price">{i.price}</div>
                    </div>
                  ))}
                </td>
                <td className="type">{item.type}</td>
              </tr>
            )
          })}
        </tbody>
      )}
    </table>
  {art.length === 0 && loading === false && (
    <div className="w-max-content mx-auto text-4xl">NO RESULTS...</div>
  )}
  {showEditView && (
    <EditView
      editItem={art[editItem]}
      closeHandler={() => setShowEditView(false)}
      refreshFetchedArtHandler={() => {
        GlobalState.setRefreshArt(prevState => prevState + 1)
      }}
    />
  )}
</div> */
}
