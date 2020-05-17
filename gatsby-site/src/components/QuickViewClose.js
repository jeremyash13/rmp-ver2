import React from "react"
import ArtContainer from "./state/ArtContainer"

export default function QuickViewClose(props) {
  const GlobalState = ArtContainer.useContainer()
  return (
    <div className={props.className} 
    onClick={props.clickHandler}
    >
      <svg
        width="46"
        height="45"
        viewBox="0 0 46 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L23 22.5M44 43L23 22.5M23 22.5L44 2L2 43"
          stroke="#858585"
          strokeWidth="5"
        />
      </svg>
    </div>
  )
}
