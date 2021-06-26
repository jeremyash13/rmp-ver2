import React, { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import axios from "axios"
import ArtContainer from "../state/ArtContainer"
import { AutoSizer, Table, Column } from "react-virtualized"
import AddNewEntryButton from "../AddNewEntryButton"
import GoldLine from "../../images/nav-bkg-line-gold-2.png"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

let fileData
const isBrowser = typeof window !== "undefined"
if (isBrowser) {
  fileData = new FormData()
}

const CreateEntryModal = ({
  refreshFramesHandler,
  setShowCreateEntryModal,
}) => {
  const GlobalState = ArtContainer.useContainer()

  const [titleInput, setTitleInput] = useState("")
  const [lineInput, setLineInput] = useState("standard")
  const [imgSrc, setImgSrc] = useState("")
  const [isFormValid, setIsFormValid] = useState(true)

  const handleTextInput = e => {
    const inputValue = e.target.value

    // Text Input Validation
    const regExp = /\W/g // test for any special character
    if (regExp.test(inputValue)) {
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
    setTitleInput(inputValue)
  }

  const addFrameToDB = async href => {
    const url = GlobalState.getFramesUrl
    const newFrame = {
      title: titleInput,
      line: lineInput,
      src: href,
    }
    axios.post(url, newFrame)
  }

  const formSubmit = async () => {
    uploadImgToS3(fileData).then(href => {
      addFrameToDB(href).then(() => {
        refreshFramesHandler()
      })
    })
  }

  const uploadImgToS3 = async fileData => {
    const url = GlobalState.s3Url
    const response = await axios.post(url, fileData)
    const location = response.data.location
    return location
  }

  const inputChange = e => {
    const file = e.target.files[0]
    const fileName = e.target.files[0].name

    // S3 data
    fileData.set("file", file)
    fileData.set("name", fileName)
  }

  const ValidationPopUp = () => {
    const style = css`
      #pointer {
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 7px solid var(--bg-dark-blue);

        transform: translateX(50px);
      }
      #content {
        background-color: var(--bg-dark-blue);
        color: white;
        ${"" /* color: var(--gold-text); */}
        font-size: .825rem;
        border-radius: 4px;
        width: max-content;
        padding: 0.25rem 0.5rem;
      }
    `
    return (
      <div css={style} className="">
        <div id="pointer"></div>
        <div id="content">Special characters are not allowed.</div>
      </div>
    )
  }

  return createPortal(
    <div css={modalStyle} className="overlay-wrapper">
      <div className="gold-border">
        <div className="entry-modal-wrapper">
          <div className="content-wrapper">
            <h3>Create Frame Entry</h3>
            <img src={GoldLine} className="gold-line"></img>

            <form action="" className="flex flex-col px-10 my-auto">
              <input
                type="file"
                id="change-photo-input"
                accept=".jpg, .jpeg, .png"
                onChange={e => {
                  inputChange(e)
                }}
                className="text-white font-sorts-mill mx-auto mb-10"
              ></input>

              <div id="details" className="flex mx-auto space-x-24">
                <div className="flex flex-col">
                  <label for="title" className="text-white">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={titleInput}
                    onChange={e => handleTextInput(e)}
                    className="px-1"
                  ></input>
                </div>

                {/* {!isFormValid && <ValidationPopUp />} */}
                <div className="flex flex-col">
                  <label for="dropdown" className="text-white">
                    Line
                  </label>
                  <select
                    name="dropdown"
                    id="frame-line-dropdown"
                    value={lineInput}
                    onChange={e => setLineInput(e.target.value)}
                  >
                    <option value="standard">Standard</option>
                    <option value="decor">Decor</option>
                  </select>
                </div>
              </div>
              <p className="mx-auto mt-2 mb-0 text-white text-sm">
                * Please do not include special characters in the title *
              </p>
              <p className="mx-auto mt-2 mb-0 text-white text-sm">
                * For example: ! @ # $ *
              </p>
            </form>
            <div className="buttons-wrapper">
              <button
                disabled={titleInput.length < 1 === true ? true : false}
                onClick={() => {
                  formSubmit()
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
  const [showCreateEntryModal, setShowCreateEntryModal] = useState(false)
  const [showRemoveModal, setShowRemoveModal] = useState(false)
  const [refreshFrames, setRefreshFrames] = useState(0)

  const [selectedItem, setSelectedItem] = useState({})

  useEffect(() => {
    fetchFrames()
  }, [refreshFrames])

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

  const RemoveModal = () => {
    const GlobalState = ArtContainer.useContainer()

    const deleteFrame = async id => {
      const url = GlobalState.deleteFramesUrl
      const response = await axios
        .post(url, {
          id: id,
        })
        .then(() => {
          // fetchFrames()
        })
    }

    return createPortal(
      <div css={modalStyle} className="overlay-wrapper">
        <div className="gold-border">
          <div className="remove-modal-wrapper">
            <div className="content-wrapper">
              <h3>Remove Frame?</h3>
              <img src={GoldLine} className="gold-line"></img>

              <div className="buttons-wrapper">
                <button
                  onClick={() => {
                    deleteFrame(selectedItem._id)
                    setShowRemoveModal(false)
                  }}
                >
                  Remove
                </button>
                <button
                  onClick={() => {
                    setShowRemoveModal(false)
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

  return (
    <div css={viewStyle}>
      <AddNewEntryButton
        clickHandler={() => {
          setShowCreateEntryModal(true)
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
                setSelectedItem(e.rowData)
                setShowRemoveModal(true)
              }}
            >
              <Column label="Title" dataKey="title" width={300} />
              <Column label="Line" dataKey="line" width={300} />
            </Table>
          )}
        </AutoSizer>
      )}
      {showCreateEntryModal && (
        <CreateEntryModal
          setShowCreateEntryModal={setShowCreateEntryModal}
          refreshFramesHandler={() => {
            setRefreshFrames(prevState => prevState + 1)
          }}
        />
      )}
      {showRemoveModal && <RemoveModal />}
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
    height: 250px;
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
