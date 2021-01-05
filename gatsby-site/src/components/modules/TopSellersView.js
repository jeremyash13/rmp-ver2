import React, { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import QuickViewClose from "../QuickViewClose"
import TopSellerItem from "../TopSellerItem"
import ClipLoader from "react-spinners/ClipLoader"
import AllArtItem from "../AllArtItem"
import axios from "axios"
import ArtContainer from "../state/ArtContainer"
import TopSellersSearch from "../TopSellersSearch"
import { AutoSizer, Table, Column } from "react-virtualized"
import AddNewEntryButton from "../AddNewEntryButton"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function TopSellersView({ props, newEntryClickHandler }) {
  // STATE
  const GlobalState = ArtContainer.useContainer()
  const [topSellingArt, setTopSellingArt] = useState([])
  const [allArt, setAllArt] = useState([])
  const [allArtLoading, setAllArtLoading] = useState(true)
  const [topSellingArtLoading, setTopSellingArtLoading] = useState(true)
  const [searchValue, setSearchValue] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})

  // FUNCTIONS
  const fetchTopSellers = () => {
    const url = GlobalState.topSellerUrl
    setTopSellingArtLoading(true)

    axios({
      method: "GET",
      url: url,
    })
      .then(json => {
        setTopSellingArt(json.data)
        setTopSellingArtLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const fetchAllArt = searchText => {
    const text = searchText || ""
    const url = GlobalState.allArtUrl
    setAllArtLoading(true)

    axios({
      url: url,
      method: "POST",
      data: {
        text: text,
      },
    })
      .then(json => {
        setAllArt(json.data)
        setAllArtLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const addTopSeller = addItem => {
    let postData = {
      _id: addItem._id,
    }
    axios({
      url: GlobalState.addTopSellerUrl,
      method: "POST",
      data: postData,
    })
      .then(() => {
        fetchTopSellers()
      })
      .catch(err => {
        console.log(err)
      })
  }
  const removeTopSeller = removeItem => {
    let postData = {
      _id: removeItem._id,
    }
    axios({
      url: GlobalState.removeTopSellerUrl,
      method: "POST",
      data: postData,
    })
      .then(() => {
        fetchTopSellers()
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchAllArt(searchValue)
  }, [searchValue])

  useEffect(() => {
    fetchTopSellers()
  }, [])

  // EXCLUSIVE COMPONENTS
  const RemoveModal = ({ onSave, onClose }) => {
    return createPortal(
      <div css={modalStyle} className="overlay-wrapper">
        <div className="gold-border">
          <div className="modal-wrapper">
            <div className="content-wrapper">
              <h3>Remove from top sellers?</h3>
              <h5 className="selected-art-title">{`"${selectedItem.title}"`}</h5>
              <div className="buttons-wrapper">
                <button onClick={onSave}>Yes</button>
                <button onClick={onClose}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.getElementById("portal-root")
    )
  }

  return (
    <div css={wrapperStyle} className="">
      <AddNewEntryButton clickHandler={newEntryClickHandler} />
      {topSellingArtLoading ? (
        <div className="w-max-content mx-auto">
          <ClipLoader loading={true} />
        </div>
      ) : (
        <AutoSizer>
          {({ width, height }) => (
            <Table
              width={width}
              height={height}
              headerClassName="table-header"
              headerHeight={40}
              rowHeight={60}
              rowCount={topSellingArt.length}
              rowGetter={({ index }) => topSellingArt[index]}
              onRowClick={e => {
                setSelectedItem(e.rowData)
                setShowModal(true)
              }}
            >
              <Column label="Title" dataKey="title" width={300} />
              <Column label="Artist" dataKey="artist" width={300} />
              <Column label="Type" dataKey="type" width={300} />
            </Table>
          )}
        </AutoSizer>
      )}
      {showModal ? (
        <RemoveModal
          onSave={() => {
            removeTopSeller(selectedItem)
          }}
          onClose={() => {
            setShowModal(false)
          }}
        />
      ) : null}
    </div>
  )
}

// STYLES
const wrapperStyle = css`
  color: var(--gold-text-2);
  min-height: 100vh;

  .table-header {
    color: var(--gold-text);
  }
`

const modalStyle = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);

  h3,
  h5,
  button {
    font-family: Sorts Mill Goudy, serif;
    color: var(--gold-text);
  }

  .modal-wrapper {
    padding: 2rem;
    background: linear-gradient(165deg, rgba(68,61,52,1) 0%, rgba(21,22,27,1) 100%);
  }

  .gold-border {
    padding: 2px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(
        165deg,
        rgba(255, 209, 140, 1) 0%,
        rgba(255, 190, 92, 1) 30%,
        rgba(62, 42, 11, 1) 100%
      );
    }
  }

  .selected-art-title {
    width: max-content;
    margin: 2rem auto 1.6rem auto;
  }

  .buttons-wrapper {
    display: flex;
    max-width: 60%;
    margin: 0 auto;
    justify-content: space-between;

    & button {
      padding: 0.05rem .5rem;
      border-bottom: solid 1px transparent;
      transition: border .5s ease-in-out;

      &:nth-child(odd) {
        margin-right: 1rem;
      }

      &:hover {
        border-bottom: solid 1px var(--gold-text);
      }
    }
  }
`
