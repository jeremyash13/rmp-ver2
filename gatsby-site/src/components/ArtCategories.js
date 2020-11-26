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
  const [topSellersActive, setTopSellersActive] = useState(false)

  const clearActive = () => {
    setAllActive(false)
    setLandscapeActive(false)
    setWesternActive(false)
    setWildlifeActive(false)
    setPatrioticActive(false)
    setTopSellersActive(false)
  }

  const style = css`
    color: var(--gold-text-2);
    font-family: "Sorts Mill Goudy";
    & .active {
      color: var(--gold-text);
      border-bottom: solid 1px var(--gold-text);
      transition: border 1s ease-in-out;
    }
    & li {
      border-bottom: solid 1px transparent;
      padding: 0 7px;
    }
    & li:hover {
      cursor: pointer;
    }
  `

  return (
    <div
      css={style}
      className="text-lg lg:text-xl text-light-gray mb-20 z-20 relative"
    >
      <div className="flex space-x-10 w-max-content mx-auto mb-6">
        <li
          className={allActive ? "active" : ""}
          onClick={() => {
            GlobalState.handleCategory("all")
            clearActive()
            setAllActive(true)
          }}
        >
          All
        </li>
        <li
          className={landscapeActive ? "active" : ""}
          onClick={() => {
            GlobalState.handleCategory("landscape")
            clearActive()
            setLandscapeActive(true)
          }}
        >
          Landscape
        </li>
        <li
          className={westernActive ? "active" : ""}
          onClick={() => {
            GlobalState.handleCategory("western")
            clearActive()
            setWesternActive(true)
          }}
        >
          Western
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
          Wildlife
        </li>
        <li
          className={patrioticActive ? "active" : ""}
          onClick={() => {
            GlobalState.handleCategory("patriotic")
            clearActive()
            setPatrioticActive(true)
          }}
        >
          Patriotic
        </li>
        <li
          className={topSellersActive ? "active" : ""}
          onClick={() => {
            GlobalState.handleCategory("topSellers")
            clearActive()
            setTopSellersActive(true)
          }}
        >
          Top Sellers
        </li>
      </div>
    </div>
  )
}
