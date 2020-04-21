import React, { useRef } from "react"
import CSS from "../css/ArtSearch.css"

export default function ArtSearch(props) {
  const inputRef = useRef()
  return (
    <div className={props.className}>
      <input
        className="art-navigation__input--search"
        type="text"
        ref={inputRef}
        placeholder="Search..."
      ></input>
      <svg
        id="search-icon"
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="6.1869"
          y1="8.52022"
          x2="0.353563"
          y2="14.3536"
          stroke="#AB8A58"
        />
        <circle cx="9.04168" cy="4.95833" r="4.45833" stroke="#AB8A58" />
        <path
          d="M7.15493 3.67777C7.36984 3.03535 8.27296 1.93605 10.1661 2.67822"
          stroke="#AB8A58"
        />
      </svg>
    </div>
  )
}
