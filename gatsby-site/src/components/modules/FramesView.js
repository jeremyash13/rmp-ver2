import React, { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import axios from "axios"
import ArtContainer from "../state/ArtContainer"
import { AutoSizer, Table, Column } from "react-virtualized"
import AddNewEntryButton from "../AddNewEntryButton"
import EditableImage from "../EditableImage"
import GoldLine from "../../images/nav-bkg-line-gold-2.png"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import FrameImgUpload from "../FrameImgUpload"

const CreateEntryModal = (
  {
    // selectedItem,
    // setSelectedItem,
    // addFrame,
    setShowCreateEntryModal,
  }
) => {
  const GlobalState = ArtContainer.useContainer()

  // useEffect(() => {

  // }, [])

  return createPortal(
    <div css={modalStyle} className="overlay-wrapper">
      <div className="gold-border">
        <div className="entry-modal-wrapper">
          <div className="content-wrapper">
            <h3>Create Frame Entry</h3>
            <img src={GoldLine} className="gold-line"></img>
            <div>
              <FrameImgUpload />
            </div>
            <div className="buttons-wrapper">
              <button
                // disabled={selectedItem.title ? false : true}
                onClick={() => {
                  // addTopSeller(selectedItem)
                  setShowCreateEntryModal(false)
                }}
              >
                Save
              </button>
              <button
                onClick={() => {
                  setShowCreateEntryModal(false)
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  )
}

export default function FramesView() {
  const GlobalState = ArtContainer.useContainer()
  const [frames, setFrames] = useState([
    {
      title: "",
      line: "",
      src: "",
    },
  ])
  const [framesLoading, setFramesLoading] = useState(false)
  const [showCreateEntryModal, setShowCreateEntryModal] = useState(true)

  useEffect(() => {
    fetchFrames()
  }, [])

  const deleteFrame = id => {
    const deleteFrameUrl = GlobalState.deleteFramesUrl
    axios({
      method: "POST",
      url: deleteFrameUrl,
      data: id,
    })
      // .post(deleteFrameUrl, {
      //   id: id,
      // })
      .then(json => {
        console.log(json.data.msg)
      })
      .then(() => {
        fetchFrames()
      })
  }

  const fetchFrames = () => {
    const url = GlobalState.getFramesUrl
    setFramesLoading(true)

    axios({
      method: "GET",
      url: url,
    })
      .then(json => {
        return json.data.map(i => {
          // prepend frame titles with "#"
          i.title = `#${i.title}`
          return i
        })
      })
      .then(json => {
        setFrames(json)
        setFramesLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div css={viewStyle}>
      <AddNewEntryButton
        clickHandler={() => {
          // setShowCreateEntryModal(true)
        }}
      />
      {false ? (
        <div className="w-max-content mx-auto">
          {/* <ClipLoader loading={true} /> */}
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
              rowCount={frames.length}
              rowGetter={({ index }) => frames[index]}
              onRowClick={e => {
                // setSelectedItem(e.rowData)
                // setShowRemoveModal(true)
              }}
            >
              <Column label="Title" dataKey="title" width={300} />
              <Column label="Line" dataKey="line" width={300} />
            </Table>
          )}
        </AutoSizer>
      )}
      {showCreateEntryModal && (
        <CreateEntryModal setShowCreateEntryModal={setShowCreateEntryModal} />
      )}
    </div>
  )
}

const viewStyle = css`
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
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.7);

  h3,
  h5,
  button {
    font-family: Sorts Mill Goudy, serif;
    color: var(--gold-text);
    width: max-content;
    margin: 0 auto;
  }
  h5 {
    margin: 1rem auto;
  }

  button:disabled {
    cursor: not-allowed;
    color: #68553c;
  }

  .remove-modal-wrapper {
    padding: 2rem;
    background: linear-gradient(165deg, rgba(68,61,52,1) 0%, rgba(21,22,27,1) 100%);
  }

  .entry-modal-wrapper {
    padding: 2rem;
    background: linear-gradient(165deg, rgba(68,61,52,1) 0%, rgba(21,22,27,1) 100%);
    height: 555px;
  }

  .gold-line {
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    width: 600px;
    height: 1px;
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

  .content-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  

  .buttons-wrapper {
    display: flex;
    max-width: 60%;
    margin: auto auto 0 auto;
    justify-content: space-between;

    & button {
      padding: 0.05rem .5rem;
      border-bottom: solid 1px transparent;
      transition: border .5s ease-in-out, color .5s ease-in-out;

      &:nth-child(odd) {
        margin-right: 1rem;
      }

      &:hover:enabled {
        border-bottom: solid 1px var(--gold-text);
      }
    }
  }
`
