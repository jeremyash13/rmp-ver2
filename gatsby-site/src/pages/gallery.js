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
import ArtSearch from "../components/ArtSearch"

const artPage = () => {
  const style = css`
    @media (min-width: 600px) {
      .query-ui {
        display:flex;
      }
    }
  `

  return (
    <Layout>
      <SEO title="Gallery" />
      <div css={style} className="art-page__wrapper">
        <div className="query-ui">
          <ArtSearch />
          <DropDownMenuSortBy />
          <DropDownMenuType />
          <DropDownMenuArtist />
        </div>
        {/* <ArtNavigation /> */}
        {/* <ArtView /> */}
      </div>
    </Layout>
  )
}

export default artPage
