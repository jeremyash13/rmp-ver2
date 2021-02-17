import React, { useState, useEffect } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { createPortal } from "react-dom"
import "../../css/animations.css"
import QuickViewClose from "../QuickViewClose"
import ClipLoader from "react-spinners/ClipLoader"
import AllArtItem from "../AllArtItem"
import axios from "axios"
import ArtContainer from "../state/ArtContainer"
import TopSellersSearch from "../TopSellersSearch"
import { AutoSizer, Table, Column } from "react-virtualized"
import AddNewEntryButton from "../AddNewEntryButton"
import GoldLine from "../../images/nav-bkg-line-gold-2.png"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function TopSellersView({ props }) {
  // STATE
  const GlobalState = ArtContainer.useContainer()
  const [topSellingArt, setTopSellingArt] = useState([{}])
  const [allArtLoading, setAllArtLoading] = useState(true)
  const [topSellingArtLoading, setTopSellingArtLoading] = useState(true)
  const [searchValue, setSearchValue] = useState("")
  const [showRemoveModal, setShowRemoveModal] = useState(false)
  const [showCreateEntryModal, setShowCreateEntryModal] = useState(false)
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

  // useEffect(() => {
  //   fetchAllArt(searchValue)
  // }, [searchValue])

  useEffect(() => {
    fetchTopSellers()
  }, [])

  return (
    <div css={viewStyle} className="">
      <AddNewEntryButton
        clickHandler={() => {
          setShowCreateEntryModal(true)
        }}
      />
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
                setShowRemoveModal(true)
              }}
            >
              <Column label="Title" dataKey="title" width={300} />
              <Column label="Artist" dataKey="artist" width={300} />
              <Column label="Type" dataKey="type" width={300} />
            </Table>
          )}
        </AutoSizer>
      )}
      {showRemoveModal && (
        <RemoveModal
          selectedItem={selectedItem}
          onSave={() => {
            removeTopSeller(selectedItem)
            setShowRemoveModal(false)
          }}
          onClose={() => {
            setShowRemoveModal(false)
          }}
        />
      )}
      {showCreateEntryModal && (
        <CreateEntryModal
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          addTopSeller={addTopSeller}
          setShowCreateEntryModal={setShowCreateEntryModal}
          onSave={() => {
            addTopSeller(selectedItem)
          }}
          onClose={() => {
            setShowCreateEntryModal(false)
          }}
        />
      )}
    </div>
  )
}

// EXCLUSIVE COMPONENTS
const RemoveModal = ({ onSave, onClose, selectedItem }) => {
  return createPortal(
    <div css={modalStyle} className="overlay-wrapper">
      <div className="gold-border">
        <div className="remove-modal-wrapper">
          <div className="content-wrapper">
            <h3>Remove from top sellers?</h3>
            <img src={GoldLine} className="gold-line"></img>
            <h5 className="selected-art">{`"${selectedItem.title}"`}</h5>
            <div className="buttons-wrapper">
              <button onClick={onSave}>Remove</button>
              <button onClick={onClose}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  )
}

const CreateEntryModal = ({
  onSave,
  onClose,
  selectedItem,
  setSelectedItem,
  addTopSeller,
  setShowCreateEntryModal,
}) => {
  const GlobalState = ArtContainer.useContainer()
  const [searchValue, setSearchValue] = useState("")
  const [searchIsFocused, setSearchIsFocused] = useState(false)
  const [autoCompleteResults, setAutoCompleteResults] = useState([])

  useEffect(() => {
    setSelectedItem({})
  }, [])

  const fetchAutoComplete = searchText => {
    const text = searchText || ""
    const url = GlobalState.autoCompleteUrl
    // setAllArtLoading(true)

    axios({
      url: url,
      method: "POST",
      data: {
        text: text,
      },
    })
      .then(json => {
        setAutoCompleteResults(json.data)
        // setAllArtLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return createPortal(
    <div
      css={modalStyle}
      className="overlay-wrapper"
      onClick={e => {
        if (e.target.tagName !== "INPUT") {
          setSearchIsFocused(false)
        } else {
          setSearchIsFocused(true)
        }
      }}
    >
      <div className="gold-border">
        <div className="entry-modal-wrapper">
          <div className="content-wrapper">
            <h3>Create Top Seller Entry</h3>
            <img src={GoldLine} className="gold-line"></img>
            <div>
              {selectedItem.title ? (
                <h5 className="selected-art">{`"${selectedItem.title}"`}</h5>
              ) : (
                <h5 className="no-selected-art">No art selected</h5>
              )}
            </div>
            <SearchWithAutoComplete
              value={searchValue}
              setSearchValue={setSearchValue}
              setSelectedItem={setSelectedItem}
              autoCompleteResults={autoCompleteResults}
              fetchAutoCompleteHandler={fetchAutoComplete}
              searchIsFocused={searchIsFocused}
              setSearchIsFocused={setSearchIsFocused}
            />
            <div className="buttons-wrapper">
              <button
                disabled={selectedItem.title ? false : true}
                onClick={() => {
                  addTopSeller(selectedItem)
                  setShowCreateEntryModal(false)
                }}
              >
                Save
              </button>
              <button
                onClick={() => {
                  onClose()
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

const SearchWithAutoComplete = ({
  searchValue,
  setSearchValue,
  autoCompleteResults,
  fetchAutoCompleteHandler,
  setSelectedItem,
  searchIsFocused,
  setSearchIsFocused,
}) => {
  return (
    <div css={searchStyle}>
      <div className="search-bar-wrapper">
        <input
          className="search-bar"
          type="text"
          value={searchValue}
          placeholder="Search art"
          onChange={e => {
            setSearchValue(e.target.value)
            fetchAutoCompleteHandler(e.target.value)
          }}
        ></input>
      </div>
      <CSSTransition
        in={searchIsFocused}
        classNames="top-sellers-autocomplete"
        timeout={350}
        unmountOnExit
      >
        <ul className="auto-complete-results">
          {autoCompleteResults.map((i, index) => (
            <li
              key={i._id}
              onClick={() => {
                setSelectedItem(autoCompleteResults[index])
                setSearchIsFocused(false)
              }}
            >
              <div>
                {`${i.title}`}
                <span className="auto-complete-checkmark">
                  {i.topSeller ? "✓" : ""}
                </span>
              </div>
              <div>{i.type}</div>
            </li>
          ))}
        </ul>
      </CSSTransition>
    </div>
  )
}

// STYLES
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

  .selected-art {
    width: max-content;
    margin: 2rem auto 1.6rem auto;
  }
  .no-selected-art {
    width: max-content;
    margin: 2rem auto 1.6rem auto;
    color: #795f3d;
  }
  

  .buttons-wrapper {
    display: flex;
    max-width: 60%;
    margin: 0 auto;
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

const searchStyle = css`
  margin: 0 auto;
  margin-bottom: auto;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;

  .search-bar-wrapper {
    position: relative;
    z-index: 1;
  }

  .search-bar {
    width: 100%;
    padding: 0.25rem 0.5rem;
    border: solid 2px #3e3730;
    border-radius: 5px;
    background-color: var(--dark-brown-2);
    color: var(--gold-text);
    font-family: Sorts Mill Goudy, serif;
    margin: 0 auto;
    transition: border 200ms ease-in-out;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.35), 0 0 10px 2px rgba(0, 0, 0, 0.2);

    &:focus {
      border: solid 2px var(--gold-2);
    }
    &::placeholder {
      color: var(--gold-text);
    }
  }

  .auto-complete-checkmark {
    padding-left: 10px;
    color: #64aa64;
  }

  .auto-complete-results {
    font-family: Sorts Mill Goudy, serif;
    background-color: var(--dark-brown-2);
    color: var(--gold-text-2);
    border-radius: 5px;
    margin-top: 2px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.3);
    max-width: 400px;

    & li {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem;
      transition: background-color 300ms cubic-bezier(0.16, 1, 0.3, 1);

      &:first-child(1) {
        border-radius: 5px 5px 0 0;
      }
      &:last-child(5) {
        border-radius: 0 0 5px 5px;
      }

      &:hover {
        cursor: pointer;
        background-color: #483f33;
        color: var(--gold-text);
        border-radius: 5px;
      }
    }
  }
`
