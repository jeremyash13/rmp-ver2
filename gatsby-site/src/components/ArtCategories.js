import React, { useState } from "react"

import ArtContainer from "./state/ArtContainer"

/** @jsx jsx */
import { css, jsx, Global } from "@emotion/core"

export default function ArtCategories(props) {
  const GlobalState = ArtContainer.useContainer()
  const [allActive, setAllActive] = useState(true)
  const [landscapeActive, setLandscapeActive] = useState(false)
  const [westernActive, setWesternActive] = useState(false)
  const [wildlifeActive, setWildlifeActive] = useState(false)
  const [patrioticActive, setPatrioticActive] = useState(false)
  const style = css`
    & .active {
        color: red;
    }
  `

  return (
    <div css={style} className={props.className}>
      <ul>
        <li
          className={allActive ? "active" : ""}
          onClick={() => {
            GlobalState.handleCategory("all")
            setAllActive(true)
          }}
        >
          ALL
        </li>
        <li
          className={landscapeActive ? "active" : ""}
          onClick={() => {
            GlobalState.handleCategory("landscape")
            setLandscapeActive(true)
          }}
        >
          LANDSCAPE
        </li>
        <li
          className={westernActive ? "active" : ""}
          onClick={() => {
            GlobalState.handleCategory("western")
            setWesternActive(true)
          }}
        >
          WESTERN
        </li>
        <li
          className={wildlifeActive ? "active" : ""}
          onClick={() => {
            GlobalState.handleCategory("wildlife")
            setWildlifeActive(true)
          }}
        >
          WILDLIFE
        </li>
        <li
          className={patrioticActive ? "active" : ""}
          onClick={() => {
            GlobalState.handleCategory("patriotic")
            setPatrioticActive(true)
          }}
        >
          PATRIOTIC
        </li>
      </ul>
    </div>
  )
}
