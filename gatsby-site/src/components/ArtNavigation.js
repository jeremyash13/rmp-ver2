import React from "react"
import InputCheckbox from "./InputCheckbox"
import ArtSearch from "./ArtSearch"

import ArtContainer from "./state/ArtContainer"

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export default function ArtNavigation() {
  const ArtState = ArtContainer.useContainer()

  const style = css`
  
  `
  return (
    <div className="art-navigation__wrapper">
      <ArtSearch className="art-navigation__wrapper--search" />
      <div className="art-navigation__wrapper--filters">
          <InputCheckbox
            text="All"
            name="type-all"
            checked={ArtState.type.all}
          />
          <InputCheckbox
            text="Giclée"
            checked={ArtState.type.giclee}
            name="type-giclee"
          />
          <InputCheckbox
            text="Gallery Wrap"
            checked={ArtState.type.wrap}
            name="type-wrap"
          />
          <InputCheckbox
            text="Standard"
            checked={ArtState.type.standard}
            name="type-standard"
          />

          <InputCheckbox
            text="All"
            checked={ArtState.category.all}
            name="category-all"
          />
          <InputCheckbox
            text="Western"
            checked={ArtState.category.western}
            name="category-western"
          />
          <InputCheckbox
            text="Landscape"
            checked={ArtState.category.landscape}
            name="category-landscape"
          />
          <InputCheckbox
            text="Patriotic"
            checked={ArtState.category.patriotic}
            name="category-patriotic"
          />
          <InputCheckbox
            text="Wildlife"
            checked={ArtState.category.wildlife}
            name="category-wildlife"
          />

          <InputCheckbox
            text="Recently Added"
            checked={ArtState.sortBy.recentlyAdded}
            name="sort-by-recently-added"
          />
          <InputCheckbox
            text="A - Z"
            checked={ArtState.sortBy.az}
            name="sort-by-a-z"
          />
      </div>
    </div>
  )
}
