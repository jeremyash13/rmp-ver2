import React, { useState } from "react"

import ArtContainer from "./state/ArtContainer"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export default function ArtCategories() {
  const GlobalState = ArtContainer.useContainer()

  const [allActive, setAllActive] = useState(true)
  const [landscapeActive, setLandscapeActive] = useState(false)
  const [westernActive, setWesternActive] = useState(false)
  const [wildlifeActive, setWildlifeActive] = useState(false)
  const [patrioticActive, setPatrioticActive] = useState(false)

  const clearActive = () => {
    setAllActive(false)
    setLandscapeActive(false)
    setWesternActive(false)
    setWildlifeActive(false)
    setPatrioticActive(false)
  }

  const style = css`
    & .active {
      color: var(--text-black);
    }
    & li:hover {
      cursor: pointer;
    }
  `

  return (
    <div css={style} className="text-lg lg:text-xl text-light-gray mb-6">
      <div className="flex space-x-10 w-max-content mx-auto mb-6">
        <li
          className={allActive ? "active" : ""}
          onClick={() => {
            GlobalState.handleCategory("all")
            clearActive()
            setAllActive(true)
          }}
        >
          ALL
        </li>
        <li
          className={landscapeActive ? "active" : ""}
          onClick={() => {
            GlobalState.handleCategory("landscape")
            clearActive()
            setLandscapeActive(true)
          }}
        >
          LANDSCAPE
        </li>
        <li
          className={westernActive ? "active" : ""}
          onClick={() => {
            GlobalState.handleCategory("western")
            clearActive()
            setWesternActive(true)
          }}
        >
          WESTERN
        </li>
      </div>
      <div className="flex space-x-4 sm:space-x-10 w-max-content mx-auto">
        <li
          className={wildlifeActive ? "active" : ""}
          onClick={() => {
            GlobalState.handleCategory("wildlife")
            clearActive()
            setWildlifeActive(true)
          }}
        >
          WILDLIFE
        </li>
        <li
          className={patrioticActive ? "active" : ""}
          onClick={() => {
            GlobalState.handleCategory("patriotic")
            clearActive()
            setPatrioticActive(true)
          }}
        >
          PATRIOTIC
        </li>
      </div>
    </div>
  )
}
