import React from "react"
import InputCheckbox from "./InputCheckbox"
import ProductFilter from "./ProductFilter"
import CSS from "../css/ArtNavigation.css"
import ArtSearch from "./ArtSearch"
import Logo from "./Logo"

import ArtContainer from "./state/ArtContainer"

export default function ArtNavigation() {
  const ArtState = ArtContainer.useContainer()

  return (
    <div className="art-navigation__wrapper">
      <Logo />
      <ArtSearch className="art-navigation__wrapper--search" />
      <div className="art-navigation__wrapper--filters">
        <ProductFilter
          text="Type"
          expandByDefault={true}
          className="art-navigation__list--type"
        >
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
        </ProductFilter>

        <ProductFilter
          text="Categories"
          expandByDefault={true}
          className="art-navigation__list--categories"
        >
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
        </ProductFilter>

        <ProductFilter
          text="Sort By"
          expandByDefault={true}
          className="art-navigation__list--sort-by"
        >
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
        </ProductFilter>
      </div>
    </div>
  )
}
