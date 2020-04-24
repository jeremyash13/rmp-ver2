import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArtNavigation from "../components/ArtNavigation"
import ArtView from "../components/ArtView"
import { DropDownMenuSortBy } from "../components/DropDownMenuSortBy"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { DropDownMenuType } from "../components/DropDownMenuType"
import { DropDownMenuArtist } from "../components/DropDownMenuArtist"

const artPage = () => {
  const style = css``

  return (
    <Layout>
      <SEO title="gallery" />
      <div className="art-page__wrapper">
        <DropDownMenuSortBy />
        <DropDownMenuType />
        <DropDownMenuArtist />

        {/* 
        <Dropdown
          options={[
            "All",
            "Clark Kelley Price",
            "Dallen Lambson",
            "Hayden Lambson",
            "Manuel Mansanarez",
            "Mitchell Mansanarez",
            "Travis Sylvester",
          ]}
          value={"Artist:"}
          placeholder="Artist: All"
        /> */}
        {/* <FilterSortBy /> */}
        {/* <ArtNavigation /> */}
        {/* <ArtView /> */}
      </div>
    </Layout>
  )
}

export default artPage
