import React from "react"

export default function EditFramesButton({ clickHandler }) {
  return (
    <button
      className="bg-light-light-gray font-light px-3 py-2 hover:bg-mint-green hover:text-white 
        transition-colors duration-200 ease-in-out"
      onClick={clickHandler}
    >
      Edit Frames
    </button>
  )
}
