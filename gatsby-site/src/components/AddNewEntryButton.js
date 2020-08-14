import React from "react"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function AddNewEntryButton(props) {
  const style = {

  }
  return (
    <div onClick={props.clickHandler} style={style} className="mt-2 flex text-sm font-medium w-max-content text-gray-500 hover:text-blackish cursor-pointer transition-colors duration-500 ease-out">
      <div className="w-2 mr-2 my-auto">
        <svg viewBox="0 0 19 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.18333 0L9.18333 19M0 9.18333H19"
            stroke="currentColor"
            strokeWidth="4"
          />
        </svg>
      </div>
      <span className="">Create Entry</span>
    </div>
  )
}
