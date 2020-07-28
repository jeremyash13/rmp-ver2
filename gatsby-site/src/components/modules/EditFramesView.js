import React, { useState, useEffect } from "react"
import QuickViewClose from "../QuickViewClose"
import ArtContainer from "../state/ArtContainer"
import axios from "axios"
import AddNewFrameForm from "../AddNewFrameForm"

export default function EditFramesView({ closeHandler }) {
  const GlobalState = ArtContainer.useContainer()
  const [frames, setFrames] = useState([
    {
      title: "",
      line: "",
      src: "",
    },
  ])
  const [framesLoading, setFramesLoading] = useState(false)

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
  }, [])
  return (
    <div className="bg-white w-full h-screen p-4 fixed z-30 inset-0">
      <div className="w-8 cursor-pointer ml-auto">
        <QuickViewClose clickHandler={closeHandler} />
      </div>
      <div className="text-blackish font-roboto">
        <h2>FRAMES</h2>
      </div>
      <div className="">
        <h4>Standard Line</h4>
        {frames.map((item, index) => {
          if (item.line.toLowerCase() === "standard") {
            return <div key={item._id}>{item.title}</div>
          }
        })}
      </div>
      <div className="">
        <h4>Decor Line</h4>
        {frames.map((item, index) => {
          if (item.line.toLowerCase() === "decor") {
            return <div key={item._id}>{item.title}</div>
          }
        })}
      </div>
      <AddNewFrameForm/>
    </div>
  )
}
