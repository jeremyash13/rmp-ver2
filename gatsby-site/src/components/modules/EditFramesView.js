import React, { useState, useEffect } from "react"
import QuickViewClose from "../QuickViewClose"
import ArtContainer from "../state/ArtContainer"
import axios from "axios"
import AddNewFrameForm from "../AddNewFrameForm"

export default function EditFramesView({ closeHandler }) {
  const GlobalState = ArtContainer.useContainer()
  const [refreshFrames, setRefreshFrames] = useState(0)
  const [frames, setFrames] = useState([
    {
      title: "",
      line: "",
      src: "",
    },
  ])
  const [framesLoading, setFramesLoading] = useState(false)

  const deleteFrame = id => {
    const deleteFrameUrl = GlobalState.deleteFramesUrl
    axios
      .post(deleteFrameUrl, {
        id: id,
      })
      .then(json => {
        console.log(json.data.msg)
      })
      .then(() => {
        setRefreshFrames(prevState => prevState + 1)
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
        setFrames(json.data)
        setFramesLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    fetchFrames()
  }, [refreshFrames])
  return (
    <div className="bg-white w-full h-screen p-4 fixed z-30 inset-0">
      <div className="w-8 cursor-pointer ml-auto">
        <QuickViewClose clickHandler={closeHandler} />
      </div>
      <div className="text-blackish font-roboto mb-10">
        <h2>FRAMES</h2>
      </div>
      <div className="flex">
        <div className="flex ml-10">
          <div className="mr-24">
            <h4>Standard Line</h4>
            {frames.map((item, index) => {
              if (item.line.toLowerCase() === "standard") {
                return (
                  <div className="relative">
                    <div
                      className="absolute cursor-pointer bg-error-red inset-0 rounded px-2 py-1 text-white opacity-0 hover:opacity-100 transition-opacity duration-200 ease-in-out text-center"
                      onClick={() => {
                        deleteFrame(item._id)
                      }}
                    >
                      Delete?
                    </div>
                    <div
                      className="border border-blackish rounded px-2 py-1 mb-2 min-w-md"
                      key={item._id}
                    >
                      {`#${item.title}`}
                    </div>
                  </div>
                )
              }
            })}
          </div>
          <div>
            <h4>Decor Line</h4>
            {frames.map((item, index) => {
              if (item.line.toLowerCase() === "decor") {
                return (
                  <div className="relative">
                    <div
                      className="absolute cursor-pointer bg-error-red inset-0 rounded px-2 py-1 text-white opacity-0 hover:opacity-100 transition-opacity duration-200 ease-in-out text-center"
                      onClick={() => {
                        deleteFrame(item._id)
                      }}
                    >
                      Delete?
                    </div>
                    <div
                      className="border border-blackish rounded px-2 py-1 mb-2 min-w-md"
                      key={item._id}
                    >
                      {`#${item.title}`}
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </div>
        <div className="ml-auto">
          <AddNewFrameForm
            refreshFramesHandler={() =>
              setRefreshFrames(prevState => prevState + 1)
            }
          />
        </div>
      </div>
    </div>
  )
}
