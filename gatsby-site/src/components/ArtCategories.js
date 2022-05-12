import React, { useState } from "react"

import ArtContainer from "./state/ArtContainer"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export default function ArtCategories() {
  const GlobalState = ArtContainer.useContainer()

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
          className={GlobalState.category === "all" ? "active" : ""}
          onClick={() => {
            GlobalState.handleCategory("all")
          }}
        >
          All
        </li>
        <li
          className={GlobalState.category === "landscape" ? "active" : ""}
          onClick={() => {
            GlobalState.handleCategory("landscape")
          }}
        >
          Landscape
        </li>
        <li
          className={GlobalState.category === "western" ? "active" : ""}
          onClick={() => {
            GlobalState.handleCategory("western")
          }}
        >
          Western
        </li>
      </div>
      <div className="flex space-x-4 sm:space-x-10 w-max-content mx-auto">
        <li
          className={GlobalState.category === "wildlife" ? "active" : ""}
          onClick={() => {
            GlobalState.handleCategory("wildlife")
          }}
        >
          Wildlife
        </li>
        <li
          className={GlobalState.category === "patriotic" ? "active" : ""}
          onClick={() => {
            GlobalState.handleCategory("patriotic")
          }}
        >
          Patriotic
        </li>
        <li
          className={GlobalState.category === "topSellers" ? "active" : ""}
          onClick={() => {
            GlobalState.handleCategory("topSellers")
          }}
        >
          Top Sellers
        </li>
      </div>
    </div>
  )
}
